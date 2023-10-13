window.addEventListener('load', () => {
  let intervalId = setInterval(changeColor, 3 * 1000);
  let button = document.querySelector('#stop');

  const input = document.querySelector('input');

  let clicks = 0;

  button.addEventListener('click', () => {
    clicks = clicks + 1;
    if (clicks % 2 === 1) {
      resetInterval(intervalId);

      button.innerHTML =
        '<button value="start" name="startButton" id="start" class="btn-primary">start</button>';
    } else {
      if (input.value.length > 0) {
        intervalId = setInterval(changeColor, input.value * 1000);
      }
      button.innerHTML =
        '<button value="stop" name="stopButton" id="stop" class="btn-primary">stop</button>';
    }
  });
});

const changeColor = function changePageBackgroundColor() {
  const red = Math.floor(Math.random() * 100) % 255;
  const green = Math.floor(Math.random() * 100) % 255;
  const blue = Math.floor(Math.random() * 100) % 255;

  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 50%)`;
};

const resetInterval = function resetBackgroundColorInterval(intervalId) {
  clearInterval(intervalId);
  setInterval(changeColor, 3 * 1000);
};
