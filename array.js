console.log(
  "\n-------------------------------- ARRAY --------------------------------"
);
const animal = ["dog", "cat", "mouse", "duck"];
console.log(animal[2]);

const arrayOfNumber = [5, 10, 15, 20, 25, 30, 35];
const arrayOfBoolean = [true, false, false, false, true];

const order = [
  { id: 10, product: "Wireless keyboard", quantity: 1 },
  { id: 11, product: "Webcam", quantity: 10 },
  { id: 12, product: "Displey", quantity: 5 },
];

const order2 = [
  { id: 11, product: "Pc", quantity: 10 },
  { id: 12, product: "mobile", quantity: 5 },
];

// console.log(order[1].product);
console.log(order.length); //conta la lunghezza dell'array
console.log(order[order.length - 1]); //prendo l'ultimo elemento

console.log(
  "\n-------------------------------- CONCATENATING AN ARRAY --------------------------------"
);

const union = order.concat(order2);
console.log(union);

console.log(
  "\n-------------------------------- COPYNG AN ARRAY --------------------------------"
);
const newAnimal = animal.slice(); //copiare dal primo al terzo elemento
newAnimal.push("new array");
console.log(newAnimal);

console.log(
  "\n-------------------------------- ADD SOMETHING TO AN ARRAY AT THE END--------------------------------"
);
const order3 = [];
animal.push("horse");
console.log(animal);

console.log(
  "\n-------------------------------- SELECTING A RANGE AN ARRAY --------------------------------"
);

const newArrayOfNumber = arrayOfNumber.slice(1, 4); //copiare dal primo al terzo elemento
newArrayOfNumber.push("new array");
console.log(newArrayOfNumber);

console.log(
  "\n-------------------------------- REMOVE THE LAST ELEMENT OF AN ARRAY --------------------------------"
);
const newArr = ["primo", "secondo", "terzo", "quarto"];
const popArr = newArr.pop();
console.log(newArr);

console.log(
  "\n-------------------------------- REMOVE THE FIRST ELEMENT OF AN ARRAY --------------------------------"
);
newArr.shift();
console.log(newArr);

console.log(
  "\n-------------------------------- ADD THE FIRST ELEMENT OF AN ARRAY --------------------------------"
);
newArr.unshift("zeta");
console.log(newArr);

console.log(
  "\n-------------------------------- ORDERING ARRAY ELEMENTS --------------------------------"
);
console.log("ARRAY ANIAML NON ORDINATO", animal);
animal.sort();
console.log("ORDDINE ARRAY ANIMAL", animal);

console.log("ARRAY NUMBER NON ORDINATO", newArr);
newArr.sort();
console.log("ORDINE ARRAY NUMBER", newArr);
