const input = document.querySelector('input');

const changeColor = function changePageBackgroundColor() {
  const red = ((Math.random() + 1) * 100) % 255;
  const green = ((Math.random() + 1) * 100) % 255;
  const blue = ((Math.random() + 1) * 100) % 255;

  document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 75%)`;
};

input.addEventListener('input', () => {
  const waitTimeInSeconds = input.value * 1000;

  console.log(waitTimeInSeconds);

  setInterval(changeColor, waitTimeInSeconds);
});
