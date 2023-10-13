const formEvent = document.querySelector('form');

const displayData = function displayDataToConsole(event) {
  event.preventDefault();

  let coursesTakenMessageDisplayed = false;

  console.group('Data inputted');
  for (let i = 0; i < 8; i++) {
    if (
      formEvent.elements[i].value.length > 0 &&
      !formEvent.elements[i].id.includes('Checkbox') &&
      formEvent.elements[i].value !== 'submit'
    ) {
      console.log(formEvent.elements[i].value);
    } else if (formEvent.elements[i].id.includes('Checkbox')) {
      if (coursesTakenMessageDisplayed === false) {
        console.log('The following courses were taken:\n');
        coursesTakenMessageDisplayed = true;
      }

      if (formEvent.elements[i].checked)
        console.log(`\t${formEvent.elements[i].value}`);
    }
  }
};

formEvent.addEventListener('submit', displayData);
