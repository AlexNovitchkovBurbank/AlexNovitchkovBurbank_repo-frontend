import React from 'react';
import ReactDOM from 'react-dom';

const findCharactersBasedOnHouse =
  function findCharactersBasedOnHouseInArrayOfObjects(userInput, data) {
    const charactersInSameHouse = [];
    for (let obj of dataArrayObject) {
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
