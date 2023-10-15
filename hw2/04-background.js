window.addEventListener('load', () => {
  let intervalId = setInterval(changeColor, 3 * 1000);
  let button = document.querySelector('#stop');

  const input = document.querySelector('input');

  let clicks = 0;

  button.addEventListener('click', () => {
    clicks = clicks + 1;
    const div = document.querySelector('div > div');
    button.remove();

    if (clicks % 2 === 1) {
      resetInterval(intervalId);

      div.innerHTML =
        '<button value="start" name="startButton" id="start" class="btn btn-primary">start</button>';
    } else {
      if (input.value.length > 0) {
        intervalId = setInterval(changeColor, input.value * 1000);
      }
      div.innerHTML =
        '<button value="stop" name="stopButton" id="stop" class="btn btn-danger">stop</button>';
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
