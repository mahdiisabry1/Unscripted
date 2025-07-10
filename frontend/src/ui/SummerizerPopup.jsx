import Summarizer from "../components/Summarizer";

// eslint-disable-next-line react/prop-types
const SummerizerPopup = ({ onCancel }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-lg w-2/4">
          <h2 className="text-xl font-bold mb-4">Post Summary</h2>
          <Summarizer />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onCancel}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default SummerizerPopup;
