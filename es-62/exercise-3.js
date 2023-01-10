function isAdult(person) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}; 

person.age = 17
const {age} = person


console.log(person)
console.log(isAdult(person));