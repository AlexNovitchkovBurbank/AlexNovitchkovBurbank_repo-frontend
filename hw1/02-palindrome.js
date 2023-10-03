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
  const divInDivSelector = document.querySelector('div > div');

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
    divInDivSelector.className = 'fail';
    divInDivSelector.innerHTML = 'Invalid input!';
  } else {
    if (palindrome) {
      divInDivSelector.className = 'success';
      divInDivSelector.innerHTML = 'This is a palindrome!';
    } else {
      divInDivSelector.className = 'fail';
      divInDivSelector.innerHTML = 'No. Try again.';
    }
  }

  divInDivSelector.classList.add('mt-3');
};

elem.addEventListener('input', handleInput);
