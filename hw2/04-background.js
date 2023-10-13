window.addEventListener('load', () => {
  let intervalId = setInterval(changeColor, 3 * 1000);
  const stopEvent = document.querySelector('#stop');

  console.log(intervalId);
  
  const input = document.querySelector('[type=number]');

  if (input.textContent.length > 0) {
    console.log("input.textContent: " + input.textContent)
    clearInterval(intervalId);
    intervalId = setInterval(changeColor, input.textContent * 1000);
  } else {
    resetInterval(intervalId);
  }
  
  stopEvent.addEventListener('click', () => {
    resetInterval(intervalId);
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
