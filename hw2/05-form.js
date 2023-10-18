// I used https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event to understand and use the submit event
// I used https://github.com/airbnb/javascript for formatting the javascript
// I used https://eloquentjavascript.net/18_http.html for adding an event listener for forms
// 

const formEvent = document.querySelector('form');

const formBlank = function isFormBlank() {
  if (
    formEvent.elements[0].value === ''
    && formEvent.elements[1].value === ''
    && formEvent[2].value === 'Choose an Option'
    && !formEvent[3].checked
    && !formEvent[4].checked
    && !formEvent[5].checked
    && formEvent[6].value === ''
  ) {
    return true;
  }

  return false;
};

const displayData = function displayDataToConsole(event) {
  event.preventDefault();

  let coursesTakenMessageDisplayed = false;

  const blankForm = formBlank();

  if (blankForm === true) {
    alert('You did not enter any data');
    return;
  }

  console.group('Data inputted');

  for (let i = 0; i < 8; i++) {
    if (
      formEvent.elements[i].value.length > 0
      && !formEvent.elements[i].id.includes('Checkbox')
      && formEvent.elements[i].value !== 'submit'
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
