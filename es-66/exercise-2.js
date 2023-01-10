// const person = {
//   id: 1,
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25
// };

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

// console.log(id, personInfo);



function person(id, ...personInfo) {

 personInfo = { firstName:firstName, lastName:lastName, age:age}

  console.log( id, personInfo ); 
}

person(1, firstName="Mario", lastName="Rossi", age=25);