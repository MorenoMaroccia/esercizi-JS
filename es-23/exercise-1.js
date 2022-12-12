const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const person2 = Object.assign({}, person )
console.log(person2)
// Print values of person using Object.keys