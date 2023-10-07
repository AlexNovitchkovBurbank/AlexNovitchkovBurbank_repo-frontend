// I used the bootstrap guide https://getbootstrap.com/docs/5.0/getting-started/introduction/
// I looked inside the imported css bootstrap file https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
// I looked at the Airbnb style guide https://github.com/airbnb/javascript#airbnb-javascript-style-guide-

const htmlBodySelector = document.querySelector('body');
const h1Selector = document.querySelector('h1');
const sectionSelector = document.querySelector('section');
const paragraphSelector = document.querySelector('p');
const elem = document.querySelector('input');

htmlBodySelector.className = 'bg-primary d-flex justify-content-center';
sectionSelector.className = 'bg-light mt-5 pt-3 pb-3 ps-3 pe-4 rounded';
h1Selector.className = 'fs-2 mb-3';
paragraphSelector.className = 'mb-2 mt-4';
elem.className = 'h-75';

const handleInput = function handleInputFromUI() {
  const responseIfPalindrome = document.querySelector('div > div');

  let invalidInput = false;
  let palindrome = true;

  for (let i = 0; i < Math.floor(elem.value.length / 2); i++) {
    if (
      elem.value[i] >= 0 &&
      elem.value[i] <= 9 &&
      elem.value[elem.value.length - 1 - i] >= 0 &&
      elem.value[elem.value.length - 1 - i] <= 9
    ) {
      if (elem.value[i] !== elem.value[elem.value.length - 1 - i]) {
        palindrome = false;
      }
    } else {
      invalidInput = true;
    }
  }

  if (elem.value.length === 0 || invalidInput) {
    responseIfPalindrome.className = 'fail';
    responseIfPalindrome.innerHTML = 'Invalid input!';
  } else {
    if (palindrome) {
      responseIfPalindrome.className = 'success';
      responseIfPalindrome.innerHTML = 'This is a palindrome!';
    } else {
      responseIfPalindrome.className = 'fail';
      responseIfPalindrome.innerHTML = 'No. Try again.';
    }
  }

  responseIfPalindrome.classList.add('mt-3');
};

elem.addEventListener('input', handleInput);
