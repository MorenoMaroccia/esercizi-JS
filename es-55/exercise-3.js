// function calculateAverageAge(persons) {
//   let adult = persons.map(, reduce((a,b,) =>a.age + b.age)
//   );
//   return adult
// }

// const persons = [
//   { name: 'Paul', age: 16 },
//   { name: 'George', age: 17 },
//   { name: 'Lucas', age: 21 },
//   { name: 'Marco', age: 32 },
//   { name: 'Peter', age: 18 },
//   { name: 'Carl', age: 13 },
//   { name: 'Simon', age: 24 },
//   { name: 'Mark', age: 15 },
//   { name: 'Sandra', age: 34 },
//   { name: 'Alice', age: 28 }
// ];

// const average = calculateAverageAge(persons);
// console.log(persons);
// console.log(average);

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];
let sum=0
let mediaEta;
function calculateAverageAge(persons1) {
  for (let i = 0; i < persons1.length; i++) {


      sum=persons1[i].age+sum;
   mediaEta=sum/persons1.length
  }
  console.log(Math.round(mediaEta))
}
calculateAverageAge(persons);
console.log(calculateAverageAge);