const input = document.querySelector('input');

const handleKeyDown = function findInParagraph(wordToFind) {
  const text = document.querySelector('div:last-child');

  console.log(text.innerText);
};

input.addEventListener('keydown', handleKeyDown);
