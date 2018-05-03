const hungry = [
  {name: "Alan", hungry: false, age: 36, gender: "male"},
  {name: "Sarah", hungry: true, age: 26, gender: "female"},
  {name: "Ian", hungry: false, age: 30, gender: "male"},
  {name: "Ellie", hungry: false, age: 26, gender: "female"},
  {name: "Kids", hungry: true, age: 12, gender: "both"},
  {name: "Dennis", hungry: true, age: 36, gender: "male"},
  {name: "T-REX", hungry: true, age: 3, gender: "female"},
  {name: "Dilophosaur", hungry: true, age: 1, gender: "female"}
];

const shoeSizes = [5, 4, 6, 6, 3, 2, 9, 8, 10, 11, 2, 14, 7, 7];

// for (let i = 0; i <hungry.length; ++i ){
//   console.log(hungry[i]);
// }

// hungry.forEach(person => console.log(`Is ${person.name} hungry? ${person.hungry}`));

// let bigShoes = [];
//
// for (let i = 0; i < shoeSizes.length; ++i){
//   if(shoeSizes[i] >= 6){
//     bigShoes.push(shoeSizes[i]);
//   }
// }

// console.log(bigShoes);


const bigShoes = shoeSizes.filter(shoe => shoe >= 6);
// console.log(bigShoes);

const hungryPeople = hungry
                          .filter(person => person.hungry === true)
                          .forEach(person => console.log(`${person.name} is hungry...`)
);

const femaleHungryPeople = hungry
                                .filter( person => person.gender === "female" )
                                .forEach( person => console.log(`${person.name} is hungry...`));

// const notHungry = hungry.filter(person => person.hungry === false)

// const category = document.querySelector('.srg');
// const links = [...category.querySelectorAll('a')];
// const things = links
//                   .map(link => link.textContent)
//                   .filter(description => description.includes('things'));

const sum = shoeSizes
                    .reduce( (total, shoeSizes) => total + shoeSizes, 0);
console.log(sum);


// const sum2 = hungry
//                   .Object.keys( obj )
//                   .reduce((total, key) => total + parseFloat(obj[key]), 0);

// let sum2 = 0;
// for(let i = 0; i < hungry.length; ++i){
//   sum2 += parseInt(hungry.age);
//   console.log(hungry.age);
// }
// console.log(hungry.length);

// console.log(sum2);
const concatenater = thingToGlue => thingToGlue.name;
// makes a function to take values from the object
const valueToSum = item => item.age;
// makes a function to add two args
const sum2 = ( prev, next ) => prev + next;
// creates new array iterating through each value, then adds all the values from the new array using prev and next as paramters
console.log(hungry.map( valueToSum ).reduce( sum2 ));
console.log(hungry.map( concatenater ).reduce( sum2 ));
