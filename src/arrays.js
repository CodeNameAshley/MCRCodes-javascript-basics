const getNthElement = (index, array) => {
  for (let index = 0 ; index < array.length; index ++);
  if (index === index) {  
  return (array[index]);}
 else if (index %  2 === 0 ){
    return (array[index(0)])
  }
};

const arrayToCSVString = array => {
  for (let i = 0;  i < array.length; i++)
 array_str = array.toString();
return array_str
};

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
  return strings.map(string => string.toUpperCase())
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join("").split(" ").reverse().join(" "))
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0)
};

const removeNthElement2 = (index, array) => {
  for (let index = 0 ; index < array.length; index --)
  return  array.splice(1, 1)
};

const elementsStartingWithAVowel = strings => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let result = []
  for (let i =0; i < strings.length; i++) {
    if (strings.startsWith(vowels[strings]))
return result;
}
}

const removeSpaces = string => {
  // your cosde here
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
