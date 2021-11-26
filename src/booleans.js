function negate(a) {
  if (a) {
    return false;
  } else {
    return true;
  }
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a === true || b === true) {
    return true;
  }
  if (a === true || b === false) {
    return false;
  }
  return false;
}

function none(a, b) {
  if (a === true || b === true) {
    return false;
  }
  if (a === true || b === false) {
    return true;
  }
  return true;
}

function one(a, b) {
  if (a === true && b === true) {
    return false;
  }
  if (a === true || b === true) {
    return true;
  }
  if (a === false && b === false) {
    return false;
  }
  if (a === false || b === true) {
    return true;
  }
}

function truthiness(a) {
  return !!a;

  // if (a === "" ||  a === 0 || a === null || a === undefined || Number.isNaN(a)
  //  ){
  //   return false;
  // } else {
  //   return true;
  // }

  //   if (a) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

function isEqual(a, b) {
  if (a !== b) {
    return false;
  }
  if (a === b) {
    return true;
  }
  if (a === true && b === true) {
    return true;
  }
  if (a === true && b === false) {
    return false;
  }
  if (typeof a === 10 && b === null) {
    return false;
  }
  if (typeof a === 10 && b === 10) {
    return true;
  }
}

function isGreaterThan(a, b) {
  if (a < b) {
    return false;
  }
  if (a > b) {
    return true;
  }
  if ((a = b)) {
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  if (b <= a) {
    return false;
  }
  if ((a = b)) {
    return true;
  }
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  if (a % 2 === 0) {
    return false;
  }
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  if (a % 2 !== 0) {
    return false;
  }
}

function isSquare(a) {
  const sqrt = Math.floor(Math.sqrt(a));
  if (a === sqrt * sqrt) {
    return true;
  }
  if (a !== sqrt * sqrt) {
    return false;
  }
}

function startsWith(char, string) {
  if (char === string.charAt(0)) {
    return true;
  }
  if (char !== string.charAt(0)) {
    return false;
  }
}

function containsVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (const i of vowels) {
    if (string.includes(i)) {
      return true;
    }
  }
  if (string !== vowels) {
    return false;
  }
}
//  return (string.includes('a'||'e'|| 'i'|| 'o'|| 'u'|| 'A'||'E'|| 'I'|| 'O'|| 'U', 0))
// return string === 'a' || string  === 'e' || string === 'i' || string  === 'o' || string === 'u';

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  if (string !== string.toLowerCase()) {
    return false;
  }
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
