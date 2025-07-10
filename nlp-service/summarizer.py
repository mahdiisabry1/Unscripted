import spacy
from flask import Flask, request, jsonify
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

app = Flask(__name__)
nlp = spacy.load('en_core_web_sm')

def summarize_text(text):
    # Process the text using spaCy
    doc = nlp(text)

    # Prepare stopwords and punctuation list
    stopwords = list(STOP_WORDS)
    punctuation_list = list(punctuation) + ['\n']


# Word tokenization
    tokens = [token.text for token in doc]
    print("Tokens:", tokens)

    # Word tokenization
    tokens = [token.text for token in doc]


    # Calculate word frequencies excluding stopwords and punctuation
    word_frequencies = {}
    for word in doc:
        word_lower = word.text.lower()
        if word_lower not in stopwords and word_lower not in punctuation_list:
            if word_lower not in word_frequencies:
                word_frequencies[word_lower] = 1
            else:
                word_frequencies[word_lower] += 1

    # Normalize frequencies by the maximum frequency
    max_frequency = max(word_frequencies.values())
    for word in word_frequencies.keys():
        word_frequencies[word] /= max_frequency

    # Sentence tokenization
    sentence_tokens = [sent for sent in doc.sents]

    final_summary = ' '.join([sent.text for sent in summary_sentences])
    print("\nSummary:")
    print(final_summary)

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

    # Select the top 30% sentences as summary
    select_length = int(len(sentence_tokens) * 0.3)
    summary_sentences = nlargest(select_length, sentence_scores, key=sentence_scores.get)

    # Combine the selected sentences into the final summary
    final_summary = ' '.join([sent.text for sent in summary_sentences])
    
    return final_summary

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    if 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    
    text = data['text']
    summary = summarize_text(text)
    
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)

