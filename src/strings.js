function sayHello(string) {
  return 'Hello, ' + string + '!';
}

function uppercase(string) {
  return string.toUpperCase('abc');
}

function lowercase(string) {
  return string.toLowerCase('ABC');
}

function countCharacters(string) {
  return string.length;
}

function firstCharacter(string) {
  const firstc = string.charAt();
  return firstc;
}

function firstCharacters(string, n) {
  const firstc = string.substring(0, n);
  return firstc;
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
