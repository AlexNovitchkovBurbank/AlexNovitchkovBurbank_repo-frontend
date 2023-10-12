window.addEventListener('load', () => {
  const submitEvent = document.querySelector('button');

  submitEvent.addEventListener('click', () => {
    const input = document.querySelector('[type=number]');
    if (input.value.length === 0) {
      resetInterval();
    } else {
      setInterval(changeColor, input.value * 1000);
    }
  });
});

const changeColor = function changePageBackgroundColor() {
  const red = Math.floor((Math.random() + 1) * 100) % 255;
  const green = Math.floor((Math.random() + 1) * 100) % 255;
  const blue = Math.floor((Math.random() + 1) * 100) % 255;

  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 75%)`;
};

const resetInterval = function resetBackgroundColorInterval() {
  setInterval(changeColor, 3 * 1000);
};
