const getNthElement = (index, array) => {
  // for (let index = 0; index < array.length; index++);
  // if (index === index) {
  if (index >= array.length) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
  for (let i = 0; i < array.length; i++) array_str = array.toString();
  return array_str;
};

const csvStringToArray = string => {
  for (let i = 0; i < string.length; i++) array_str2 = string.split(',');
  return array_str2;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  if (index > -1) return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join('')
      .split(' ')
      .reverse()
      .join(' ')
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const splicedArray = [...array];
  splicedArray.splice(index, 1);
  return splicedArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = /^[aeiouAEIOU]/i;
  const noVowels = strings.filter(vowel => vowels.test(vowel));
  return noVowels;
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  let looper = 0;
  for (let i = 0; i < numbers.length; i++) {
    looper += numbers[i];
  }
  return looper;
};

const sortByLastLetter = strings => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i]
      .split('')
      .reverse()
      .join('');
  }
  strings.sort();

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i]
      .split('')
      .reverse()
      .join('');
  }

  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
