import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

# Input text to summarize
text = """Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a businessman. He is known for his leadership of Tesla, SpaceX, X (formerly Twitter), and the Department of Government Efficiency (DOGE). Musk has been considered the wealthiest person in the world since 2021; as of May 2025, Forbes estimates his net worth to be US$424.7 billion.

Born to a wealthy family in Pretoria, South Africa, Musk emigrated in 1989 to Canada. He received bachelor's degrees from the University of Pennsylvania in 1997 before moving to California, United States, to pursue business ventures. In 1995, Musk co-founded the software company Zip2. Following its sale in 1999, he co-founded X.com, an online payment company that later merged to form PayPal, which was acquired by eBay in 2002. That year, Musk also became an American citizen.

In 2002, Musk founded the space technology company SpaceX, becoming its CEO and chief engineer; the company has since led innovations in reusable rockets and commercial spaceflight. Musk joined the automaker Tesla as an early investor in 2004 and became its CEO and product architect in 2008; it has since become a leader in electric vehicles. In 2015, he co-founded OpenAI to advance artificial intelligence research but later left; growing discontent with the organization's direction and their leadership in the AI boom in the 2020s led him to establish xAI. In 2022, he acquired the social network Twitter, implementing significant changes and rebranding it as X in 2023. His other businesses include the neurotechnology company Neuralink, which he co-founded in 2016, and the tunneling company the Boring Company, which he founded in 2017. Musk was the largest donor in the 2024 U.S. presidential election, and is a supporter of global far-right figures, causes, and political parties. In early 2025, he served as senior advisor to United States president Donald Trump and as the de facto head of DOGE.

Musk's political activities, views, and statements have made him a polarizing figure, especially following the COVID-19 pandemic. He has been criticized for making unscientific and misleading statements, including COVID-19 misinformation and promoting conspiracy theories, and affirming antisemitic, racist, and transphobic comments. His acquisition of Twitter was controversial due to a subsequent increase in hate speech and the spread of misinformation on the service. His role in the second Trump administration attracted public backlash, particularly in response to DOGE."""

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