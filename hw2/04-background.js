// I used https://developer.mozilla.org/en-US/docs/Web/API/setInterval for setting and clearing the interval
// I used https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event for the load event
// I used https://github.com/airbnb/javascript for formatting the javascript

const changeColor = function changePageBackgroundColor() {
  const red = Math.floor(Math.random() * 100) % 255;
  const green = Math.floor(Math.random() * 100) % 255;
  const blue = Math.floor(Math.random() * 100) % 255;

  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 50%)`;
};

let intervalId = setInterval(changeColor, 3 * 1000);
const button = document.querySelector('#button');

const input = document.querySelector('input');

window.addEventListener('load', () => {
  button.addEventListener('click', () => {
    // If the button is of the style btn-primary, that means we need to start the interval specified in the input
    if (button.className === 'btn btn-primary' && input.value.length > 0) {
      clearInterval(intervalId);
      intervalId = setInterval(changeColor, input.value * 1000);

      button.className = 'btn btn-danger';
      button.textContent = 'stop';
    } else if (button.textContent === 'stop') {
      clearInterval(intervalId);

      button.className = 'btn btn-primary';
      button.textContent = 'start';
    }
  });
});
