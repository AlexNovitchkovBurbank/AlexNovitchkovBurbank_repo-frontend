const input = document.querySelector('input');
const textSelector = document.querySelector('div:last-child');

const stringToArray = function BreakTextInArrayOfWords(text) {
  let formattedText = text.replaceAll('       ', '').trim();

  const arrayOfText = formattedText.split(' ');

  return arrayOfText;
};

const resetText = function setTextNoHighlights(text) {
  const originalWordsArray = stringToArray(text);

  const wordsWithoutHighlights = originalWordsArray.map((word) => {
    if (word.startsWith('class=')) {
      return word
        .replaceAll('class="bg-warning">', '')
        .replaceAll('</span>', '');
    } else if (word.startsWith('<span')) {
      return '';
    }

    return word;
  });

  let originalText = wordsWithoutHighlights.join(' ');

  console.log(originalText);

  textSelector.innerHTML = originalText;
};

const highlightWords = function highlightText(text) {
  const modifiedWordsArray = stringToArray(text);

  const wordToFind = input.value;

  if (wordToFind.length === 0) return false;

  const wordsWithHighlights = modifiedWordsArray.map((word) => {
    if (word === wordToFind) {
      return `<span class="bg-warning">${word}</span>`;
    } else if (word === wordToFind + ',' || word === wordToFind + '.') {
      return `<span class="bg-warning">${word}</span>`;
    }

    return word;
  });

  let originalText = wordsWithHighlights.join(' ');

  textSelector.innerHTML = originalText;
};

const handleKeyDown = function findInParagraph(eventContainingWord) {
  resetText(textSelector.innerHTML);
  highlightWords(textSelector.innerHTML);
};

input.addEventListener('keydown', handleKeyDown);
