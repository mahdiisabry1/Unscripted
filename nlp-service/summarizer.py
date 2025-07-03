import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

# Input text to summarize
text = """Input Text Here: This is a sample text that we will use to demonstrate the summarization process. The goal is to extract the most important sentences from this text, which will help in understanding the main points without having to read everything. Summarization is a key task in natural language processing and can be applied to various domains such as news articles, research papers, and more."""

# Load spaCy English model
nlp = spacy.load('en_core_web_sm')

# Process the text
doc = nlp(text)

# Prepare stopwords and punctuation list
stopwords = list(STOP_WORDS)
punctuation = punctuation + '\n'

# Word tokenization (optional print)
tokens = [token.text for token in doc]
print("Tokens:", tokens)

# Calculate word frequencies excluding stopwords and punctuation
word_frequencies = {}
for word in doc:
    word_lower = word.text.lower()
    if word_lower not in stopwords and word_lower not in punctuation:
        if word_lower not in word_frequencies:
            word_frequencies[word_lower] = 1
        else:
            word_frequencies[word_lower] += 1

print("Word Frequencies:", word_frequencies)

# Normalize frequencies by the maximum frequency
max_frequency = max(word_frequencies.values())
for word in word_frequencies.keys():
    word_frequencies[word] = word_frequencies[word] / max_frequency

print("Normalized Word Frequencies:", word_frequencies)

# Sentence tokenization
sentence_tokens = [sent for sent in doc.sents]
print("Sentences:", sentence_tokens)

# Score sentences based on word frequencies
sentence_scores = {}
for sent in sentence_tokens:
    for word in sent:
        word_lower = word.text.lower()
        if word_lower in word_frequencies:
            if sent not in sentence_scores:
                sentence_scores[sent] = word_frequencies[word_lower]
            else:
                sentence_scores[sent] += word_frequencies[word_lower]

print("Sentence Scores:", sentence_scores)

# Select the top 30% sentences as summary
select_length = int(len(sentence_tokens) * 0.3)
summary_sentences = nlargest(select_length, sentence_scores, key=sentence_scores.get)

# Combine the selected sentences into the final summary
final_summary = ' '.join([sent.text for sent in summary_sentences])
print("\nSummary:")
print(final_summary)