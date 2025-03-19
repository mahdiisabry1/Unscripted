from transformers import pipeline
from bs4 import BeautifulSoup
import sys

def extract_text_from_html(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    return soup.get_text()

def summarize_text(text, max_length=130, min_length=30):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']

if __name__ == "__main__":
    html_content = sys.argv[1]  # Get the HTML content from command-line arguments
    plain_text = extract_text_from_html(html_content)  # Extract plain text
    summary = summarize_text(plain_text)  # Summarize the plain text
    print(summary)  # Output the summary