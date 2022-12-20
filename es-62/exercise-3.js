function isAdult(person) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}; 

// person.age = 15;
// let {id, firstName, lastName, age} = person;

let new person = {id1:1,firstName1:'mario', lastName1:'rossi', age1:15};

console.log(person)
console.log(isAdult(person));