import React from 'react';
import ReactDOM from 'react-dom';

const findCharactersBasedOnHouse =
  function findCharactersBasedOnHouseInArrayOfObjects(
    userInput,
    allCharactersArray
  ) {
    const charactersInSameHouse = [];
    for (let obj of allCharactersArray) {
      if (
        obj['family'] === userInput.replace('House ', '') &&
        obj['family'] !== ''
      ) {
        charactersInSameHouse.push(obj);
      }
    }

    return charactersInSameHouse;
  };

const HousesComponent = function housesChart() {
  return <div>Houses page</div>;
};

export default HousesComponent;
