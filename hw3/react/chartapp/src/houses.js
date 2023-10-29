import React from 'react';
import ReactDOM from 'react-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(20, 20, 20, 0.8)',
  'rgba(200, 100, 0, 0.8)',
  'rgba(255, 100, 255, 0.8)',
  'rgba(100, 200, 0, 0.8)',
  'rgba(45, 100, 200, 0.8)',
  'rgba(20, 20, 20, 0.8)',
  'rgba(200, 100, 0, 0.8)',
  'rgba(255, 100, 255, 0.8)',
  'rgba(100, 200, 0, 0.8)',
  'rgba(45, 100, 200, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(20, 20, 20, 0.8)',
  'rgba(200, 100, 0, 0.8)',
  'rgba(255, 100, 255, 0.8)',
  'rgba(54, 98, 235, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
  'rgba(20, 20, 20, 1)',
  'rgba(200, 100, 0, 1)',
  'rgba(255, 100, 255, 1)',
  'rgba(100, 200, 0, 1)',
  'rgba(45, 100, 200, 1)',
  'rgba(20, 20, 20, 1)',
  'rgba(200, 100, 0, 1)',
  'rgba(255, 100, 255, 1)',
  'rgba(100, 200, 0, 1)',
  'rgba(45, 100, 200, 1)',
  'rgba(199, 199, 199, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(20, 20, 20, 1)',
  'rgba(200, 100, 0, 1)',
  'rgba(255, 100, 255, 1)',
  'rgba(54, 98, 235, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

let data = {};

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const recordSameHouse = function recordCharacterSameHouse(
  searchString,
  allCharactersArray
) {
  let charactersCountInSameHouse = 0;

  for (let i = 0; i < allCharactersArray.length; i++) {
    if (
      allCharactersArray[i]['family'].replace('House ', '') === searchString &&
      allCharactersArray[i]['family'] !== ''
    ) {
      charactersCountInSameHouse = charactersCountInSameHouse + 1;
    }
  }

  return charactersCountInSameHouse;
};

const chartHouseStatistics = function chartNumberOfCharactersInEachHouse() {
  fetch(url)
    .then((characterDataArray) => characterDataArray.json())
    .then((characterDataArray) => {
      const { houseNames, charactersCountInSameHouseArray } =
        findCharactersBasedOnHouse(characterDataArray);
      data = {
        labels: houseNames,
        datasets: [
          {
            label: 'Character houses',
            data: charactersCountInSameHouseArray,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };
    })
    .catch((error) => console.error(error));
};

const findCharactersBasedOnHouse =
  function findCharactersBasedOnHouseInArrayOfObjects(allCharactersArray) {
    const charactersCountInSameHouseArray = [];
    const houseNames = [];

    let charactersCountInSameHouse = 0;

    for (let i = 0; i < allCharactersArray.length; i++) {
      const characterInfo = allCharactersArray[i];
      charactersCountInSameHouse = 0;

      const searchString = characterInfo['family'].replace('House ', '');

      if (
        !houseNames.includes(searchString) &&
        searchString !== 'Unknown' &&
        searchString !== 'None'
      ) {
        charactersCountInSameHouse = recordSameHouse(
          searchString,
          allCharactersArray
        );

        if (charactersCountInSameHouse !== 0) {
          charactersCountInSameHouseArray.push(charactersCountInSameHouse);
          houseNames.push(searchString);
        }
      }
    }

    //console.log(charactersCountInSameHouseArray);
    return { houseNames, charactersCountInSameHouseArray };
  };

chartHouseStatistics();

// I used https://react-chartjs-2.js.org/ to initialize the variables
ChartJS.register(ArcElement, Tooltip, Legend);

const HousesComponent = function housesChart() {
  return (
    <main>
      <h1>Characters per house</h1>
      <Doughnut data={data} />
    </main>
  );
};

export default HousesComponent;
