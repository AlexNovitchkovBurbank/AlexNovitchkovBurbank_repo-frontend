import React from 'react';
import './search.css';
import axios from 'axios';

const url = 'https://thronesapi.com/api/v2/Characters';

let apiData = null;

// Finds a character by first name
const findDataInArrayByFirstName =
  function searchDataInArrayOfObjectByFirstName(userInput, dataArrayObject) {
    const charactersWithSameName = [];
    for (let obj of dataArrayObject) {
      if (obj['firstName'] === userInput && obj['firstName'] !== '') {
        charactersWithSameName.push(obj);
      }
    }

    return charactersWithSameName;
  };

// builds the container that stores all the character data
const buildContainer = function buildContainerForCharacter(character) {
  const container = document.createElement('div');
  const characterImage = document.createElement('img');
  const characterName = document.createElement('p');
  const characterTitle = document.createElement('p');

  container.style.width = '300px';
  container.style.height = '400px';

  characterImage.src = `${character['imageUrl']}`;
  characterImage.alt = `${character['image']}`;
  characterImage.style.width = '200px';
  characterImage.style.height = '200px';
  characterImage.className = 'mx-1';

  characterName.innerText = `${character['firstName']} ${character['lastName']}`;
  characterName.className = 'fw-bold fs-3 mx-3';

  characterTitle.innerText = `${character['title']}`;
  characterTitle.className = 'fw-bold fs-5 mx-4';

  container.appendChild(characterImage);
  container.appendChild(characterName);
  container.appendChild(characterTitle);

  return container;
};

// Removes all previous elements that may exist in the div element with id of results
const removeNodesFromContainer = function removeAnyPreviousNodesFromContainer(
  container
) {
  if (container.hasChildNodes()) container.innerHTML = '';

  return container;
};

const displayCharacter = function displayCharacterOnScreen(
  containerToDisplayTo,
  characterNode
) {
  containerToDisplayTo.appendChild(characterNode);
};

axios.get(url).then((data) => (apiData = data.data));

// handles the submit event and is the main decision maker of this component
document.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('input');
  let resultsBlock = document.querySelector('#results');

  let userInput = input.value;

  const charactersWithSameName = findDataInArrayByFirstName(userInput, apiData);

  resultsBlock = removeNodesFromContainer(resultsBlock);

  if (charactersWithSameName.length > 0) {
    for (let character of charactersWithSameName) {
      const containerCharacterData = buildContainer(character);
      displayCharacter(resultsBlock, containerCharacterData);
    }
  }
});

// The component that runs when /search is invoked
const SearchComponent = function searchCharacters() {
  return (
    <div>
      <h1>Search</h1>
      <form className='d-flex flex-direction-row justify-content-center'>
        <label htmlFor='searchBox' className='me-2 d-inline align-self-center'>
          Search for character:
        </label>
        <input
          type='text'
          className='d-inline form-control w-25 me-1 align-self-center'
          id='searchBox'
        />
        <button
          type='submit'
          className='d-inline btn btn-primary align-self-center'
        >
          submit
        </button>
      </form>
      <div
        id='results'
        className='mt-4 d-flex flex-direction-row justify-content-center'
      ></div>
    </div>
  );
};

export default SearchComponent;
