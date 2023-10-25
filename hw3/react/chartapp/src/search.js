import React from 'react';
import './search.css';
import axios from 'axios';

const url = 'https://thronesapi.com/api/v2/Characters';

const apiData = null;

const findDataInArray = function searchInDataInArray(userInput, dataArrayObject) {
  for (let dataAsObject of dataArrayObject) {
    if (dataArrayObject.firstName === userInput) {
        return dataAsObject;
    }
  }

  return null;
}

axios.get(url).then((data) => apiData = data);

document.addEventListener('submit', (event) => {
  event.preventDefault();

  character = findDataInArray(apiData);

  const resultBlock = document.querySelector('#results');
});

const SearchComponent = function searchCharacters() {
  return (
    <div>
      <h1>Search</h1>
      <form>
        <label htmlFor='searchBox' className='me-2'>
          Search for character:
        </label>
        <input type='text' className='form-input' id='searchBox' />
        <button type='submit' className='btn-primary'>
          submit
        </button>
      </form>
      <div id='results'></div>
    </div>
  );
};

export default SearchComponent;
