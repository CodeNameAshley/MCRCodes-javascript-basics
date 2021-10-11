const getNthElement = (index, array) => {
  for (let index = 0 ; index < array.length; index ++);
  if (index === index) {  
  return (array[index]);}
 else if (index %  2 === 0 ){
    return (array[index(0)])
  }
}

const arrayToCSVString = array => {
  for (let i = 0;  i < array.length; i++)
 array_str = array.toString();
return array_str;
}

const csvStringToArray = string => {
  for (let i = 0; i < string.length; i++)
  array_str2 = string.split(',');
return array_str2;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  if (index > -1)
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String)
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
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
