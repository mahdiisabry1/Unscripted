import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import axios from "axios";

const SummerizerPopup = ({ onCancel, content }) => {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Strip HTML tags to get plain text for the summarizer
  const extractPlainText = (html) => {
    const sanitized = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
    return sanitized.replace(/\s+/g, " ").trim();
  };

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setIsLoading(true);
        const plainText = extractPlainText(content);

        const response = await axios.post("http://127.0.0.1:5000/summarize", {
          text: plainText,
        });

        setSummary(response.data.summary);
      } catch (err) {
        setError("Failed to generate summary. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (content) fetchSummary();
  }, [content]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Post Summary</h2>

        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          </div>
        )}

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {!isLoading && !error && (
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        )}

        <button
          onClick={onCancel}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SummerizerPopup;
