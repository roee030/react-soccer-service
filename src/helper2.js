
const data = require('./data/result_upcoming.json')
const fs = require('fs'); 

  /** 
   * Capitalizes the first letter in a string
   * @param {string} str
   * @returns {string}
   */
  function upperCaseFirstLetter(str) {
    const firstLetter = str[0];
    const otherLetters = str.substr(1);
  
    return `${firstLetter.toUpperCase()}${otherLetters}`;
  }
  
  
  /** 
   * @param {typeof data} weirdData
   * @returns Data that is formatted in a nicer way
   */
  function convertWeirdFormat(weirdData) {
    // The first array will be an array of object keys. The rest will be arrays of object values.
    const [keys, ...values] = weirdData
      // Flatten the array.
      // weirdData.flat() would be very useful here, but it's somewhat new and I don't know which
      // version of Node you have installed, so we'll go with .reduce() here.
      .reduce(
        (accumulator, currentArray) => {
          const [stringInsideCurrentArray] = currentArray;
          return [
            ...accumulator,
            stringInsideCurrentArray,
          ];
        }
      )
      // Separate the comma-separated strings
      .map(str => str.split(','));
  
  
    // Since I'm nit-picky, I'm going to convert the keys from snake_case to camelCase so it feels
    // like "normal" JS when referencing it.
    const camelCaseKeys = keys
      .map(key => {
        const [firstWord, ...otherWords] = key.split('_');
        const otherWordsCapitalized = otherWords.map(upperCaseFirstLetter);
        return [firstWord, ...otherWordsCapitalized].join('');
      });
  
    return values
      // Create an array of objects
      .map(innerValues => innerValues.reduce(
        (accumulator, currentValue, idx) => {
          return {
            ...accumulator,
            [camelCaseKeys[idx]]: currentValue,
          };
        },
        {}
      ));
  }
  
  const json = (convertWeirdFormat(data));
  const json2 = JSON.stringify(json)
  fs.writeFileSync('result_upcoming.json',json2)