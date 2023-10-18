const EMBDASH = String.fromCharCode(0x2014);

const input = document.querySelector('input');
const textSelector = document.querySelector('div > div:last-child');

const stringToArray = function BreakTextInArrayOfWords(text) {
  let formattedText = text.replaceAll('       ', '').trim();

  const arrayOfText = formattedText.split(' ');

  return arrayOfText;
};

const resetText = function removeTextHighlights(DOMText) {
  const originalText = DOMText.replaceAll(
    '<span class="bg-warning">',
    ''
  ).replaceAll('</span>', '');

  textSelector.innerHTML = originalText;
};

const highlightWords = function highlightText(DOMText, searchWordEvent) {
  const modifiedWordsArray = stringToArray(DOMText);

  let previousInputBoxKeyPresses = searchWordEvent.srcElement.value;

  let wordToFind = null;

  if (searchWordEvent.key.length === 1) {
    wordToFind = previousInputBoxKeyPresses + searchWordEvent.key;
  } else if (searchWordEvent.key.startsWith('Backspace')) {
    wordToFind = previousInputBoxKeyPresses.substring(
      0,
      searchWordEvent.srcElement.value.length - 1
    );
  } else {
    wordToFind = previousInputBoxKeyPresses;
  }

  const wordsWithHighlights = modifiedWordsArray.map((token) => {
    if (token.toUpperCase() === wordToFind.toUpperCase()) {
      return `<span class="bg-warning">${token}</span>`;
    } else if (token === wordToFind + ',' || token === wordToFind + '.') {
      const word = token.substring(0, token.length - 1);
      const punctuation = token[token.length - 1];

      token = `<span class="bg-warning">${word}</span>${punctuation}`;
    } else if (
      token.includes(wordToFind + EMBDASH) ||
      token.includes(EMBDASH + wordToFind)
    ) {
      const arrayOfTokenParts = token.split(EMBDASH);

      for (const i of arrayOfTokenParts) {
        if (i === wordToFind || i === wordToFind + '\n') {
          token = token.replace(
            wordToFind,
            `<span class="bg-warning">${wordToFind}</span>`
          );
        }
      }
    }

    return token;
  });

  const highlightText = wordsWithHighlights.join(' ');

  textSelector.innerHTML = highlightText;
};

const handleKeyDown = function findInParagraph(eventContainingWord) {
  resetText(textSelector.innerHTML);
  highlightWords(textSelector.innerHTML, eventContainingWord);
};

input.addEventListener('keydown', handleKeyDown);
