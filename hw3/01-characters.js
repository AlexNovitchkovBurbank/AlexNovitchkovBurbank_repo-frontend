// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

let numElements = 0;

document.addEventListener('mouseover', (event) => {
  let container = null;

  for (let i = 1; i <= numElements; i++) {
    container = document.querySelector(`#container${i}`);

    if (
      !event.target.id.includes('container') &&
      !event.target.id.includes('name') &&
      !event.target.id.includes('image') &&
      !event.target.id.includes('title')
    ) {
      if (container.className.includes('bg-primary')) {
        container.classList.remove('bg-primary');
        container.classList.add('cyan');
      }
    } else if (
      event.target.id === `container${i}` ||
      event.target.id === `name${i}` ||
      event.target.id === `image${i}` ||
      event.target.id === `title${i}`
    ) {
      if (container.className.includes('cyan')) {
        container.classList.remove('cyan');
        container.classList.add('bg-primary');
      }
    } else {
      if (container.className.includes('bg-primary')) {
        container.classList.remove('bg-primary');
        container.classList.add('cyan');
      }
    }
  }
});

fetch(url)
  .then((response) => response.json())
  .then((content) => displayData(content))
  .catch((e) => console.error(e));

const displayData = function displayDataOnDOM(content) {
  const section = document.querySelector('section');

  let element = null;

  for (let character of content) {
    element = buildElement(character);
    section.appendChild(element);
  }
};

const buildElement = function buildDOMElement(content) {
  const container = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h2');
  const title = document.createElement('h3');

  numElements = numElements + 1;

  container.style.width = '256px';
  container.style.height = '400px';
  container.className = 'cyan mb-4';
  container.id = `container${numElements}`;

  image.src = content['imageUrl'];
  image.alt = `Picture of ${content['firstName']} ${content['lastName']}`;
  image.style.width = '236px';
  image.style.height = '236px';
  image.className = 'mx-2';
  image.id = `image${numElements}`;

  name.innerText = `${content['firstName']} ${content['lastName']}`;
  name.style.textAlign = 'center';
  name.className = 'fs-3 fw-bold mx-3 text-dark';
  name.id = `name${numElements}`;

  title.innerText = content['title'];
  title.style.textAlign = 'center';
  if (smallText(content['title'])) {
    title.className = 'fs-6 fw-bold mx-3 text-dark';
  } else {
    title.className = 'fs-5 fw-bold mx-3 text-dark';
  }
  title.id = `title${numElements}`;

  container.appendChild(image);
  container.appendChild(name);
  container.appendChild(title);

  return container;
};

const smallText = function shouldTextBeSmall(textLength) {
  if (textLength >= 35) return true;
  return false;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://getbootstrap.com/docs/5.0/utilities/background/
// https://getbootstrap.com/docs/5.0/utilities/flex/
// https://thronesapi.com/api/v2/Characters
// https://getbootstrap.com/docs/5.0/utilities/text/
// https://getbootstrap.com/docs/5.0/utilities/sizing/
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
// Visual Studio code intellisense
// Microsoft Edge DevTools
// Lighthouse in Microsoft Edge
// Wave Extension in Microsoft Edge
