const changeColor = function changePageBackgroundColor() {
  const red = Math.floor(Math.random() * 100) % 255;
  const green = Math.floor(Math.random() * 100) % 255;
  const blue = Math.floor(Math.random() * 100) % 255;

  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 50%)`;
};

let intervalId = setInterval(changeColor, 3 * 1000);
let button = document.querySelector('#button');

const input = document.querySelector('input');

window.addEventListener('load', () => {
  button.addEventListener('click', () => {
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
