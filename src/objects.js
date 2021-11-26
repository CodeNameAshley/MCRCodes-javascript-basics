const createPerson = (name, age) => {
  let person = {
    name,
    age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // If i dont put the else return false, it doesn't pass the test...
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  return (ages = people.map(person => person.age));
};

const findByName = (name, people) => {
  return (names = people.find(person => person.name === name));
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((age1, age2) => age1 + age2.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  const Peep = {
    name,
    age,
    introduce: you => {
      return `Hi ${you}, my name is ${name} and I am ${age}!`;
    }
  };
  return Peep;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
