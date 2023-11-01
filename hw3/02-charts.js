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

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

// I used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes to understand arrays and methods

// returns all characters that are in the house specified by the search string
const recordSameHouse = function recordCharacterSameHouse(
  searchString,
  allCharactersArray
) {
  let charactersCountInSameHouse = 0;

  for (let i = 0; i < allCharactersArray.length; i++) {
    if (
      allCharactersArray[i]['family'].replace('House ', '') === searchString
      && allCharactersArray[i]['family'] !== ''
    ) {
      charactersCountInSameHouse = charactersCountInSameHouse + 1;
    }
  }

  return charactersCountInSameHouse;
};

const renderChart = (charactersCountInSameHouseArray) => {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: 'Character houses',
          data: charactersCountInSameHouseArray,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

const fixTyposInNames = function fixTyposInCharacterNames(data) {
  for (let i = 0; i < data.length; i++) {
    data[i]['family'] = data[i]['family'].replace("Targaryn", "Targaryen");
    data[i]['family'] = data[i]['family'].replace("Unkown", "Unknown");
  }

  return data;
}

// Entry point
const chartHouseStatistics = function chartNumberOfCharactersInEachHouse() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      data = fixTyposInNames(data);

      const charactersCountInSameHouseArray =
        findCharactersBasedOnHouse(data);
      renderChart(charactersCountInSameHouseArray);
    })
    .catch((error) => console.error(error));
};

// We need to make sure to put characters in respective houses without repetition
const findCharactersBasedOnHouse =
  function findCharactersBasedOnHouseInArrayOfObjects(allCharactersArray) {
    const charactersCountInSameHouseArray = [];
    const houseNames = [];

    let charactersCountInSameHouse = 0;

    // loops through all characters and searches for a specific character. Omits all characters that already were matched up
    for (let i = 0; i < allCharactersArray.length; i++) {
      const characterInfo = allCharactersArray[i];
      charactersCountInSameHouse = 0;

      const searchString = characterInfo['family'].replace('House ', '');

      // Do not want to search for the number of characters in a house that has already been calculated
      if (
        !houseNames.includes(searchString)
        && searchString != 'Unknown'
        && searchString != 'None'
      ) {
        // returns all characters that are in the house specified by the search string
        charactersCountInSameHouse = recordSameHouse(
          searchString,
          allCharactersArray
        );

        // If there are no characters at a house, omit an entry in the number and name arrays for that house
        if (charactersCountInSameHouse !== 0) {
          // Pushes the name of the house into a seperate array.
          // The number of characters in a house and the name of that house are going to be at the same index
          charactersCountInSameHouseArray.push(charactersCountInSameHouse);
          houseNames.push(searchString);
        }
      }
    }

    return charactersCountInSameHouseArray;
  };

chartHouseStatistics();