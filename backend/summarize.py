from transformers import pipeline
import sys

def summarize_text(text, max_length=130, min_length=30):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']

if __name__ == "__main__":
    text = sys.argv[1]  # Get the text from command-line arguments
    summary = summarize_text(text)
    print(summary) 