const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// for in
const person2={};
for(let key in person1 ) {
  person2[key] = person1[key]
};
person2.firstName='simon'

// Object.assaign
// const person2 = Object.assign({}, person1 )

// person2.firstName='Simon'

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


// person2=person1 in questo modo person2 punta a person1 e non copierà l'oggetto