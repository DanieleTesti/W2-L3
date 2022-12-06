console.log(
  "\n-------------------------------- CREATING AN OBJECT --------------------------------"
);

const student = {
  firstName: "Alessandro",
  lastName: "D'Ascenso",
  age: 25,
  hasWebcam: true,
};

const student2 = {
  firstName: "Alberto",
  lastName: "Macis",
  age: 29,
  hasWebcam: false,
};

const student3 = {
  firstName: "Michela",
  lastName: "Kalowski",
  age: 29,
  hasWebcam: true,
};

console.log(
  "\n---------------------------- ACCESSING A OBJECT PROPERTY ---------------------------"
);

console.log(student); //tutto l'oggetto
console.log(student.firstName, student.lastName);
console.log(student2.firstName, student2.lastName);
console.log(student3.firstName, student3.lastName);

console.log(
  "\n-------------------------------- Changing AN OBJECT --------------------------------"
);
student3.hasWebcam = false;
console.log(
  student3.firstName,
  student3.lastName,
  " ha la webcam?",
  student3.hasWebcam
);

student3.hasWebcam != student2.hasWebcam;
student.age + 5;
/*nei cicli si può usare student.age++*/
console.log(student.firstName, student.lastName, "ha", student.age, "anni");
student.location = "Roma"; //Aggiungo una variabile che non esiste
console.log(student);
student.cancella = "Ciao";
console.log(student);
console.log(
  "\n-------------------------------- REMOVING OBJECT PROPERTY --------------------------------"
);
delete student.cancella; //cancella una variabile dell'oggetto
console.log(student);

console.log("STUDENTE 3 PRIMA", student3);
const student4 = {};
Object.assign(student4, student3);

const _student4 = Object.assign({}, student3, {
  firstName: "Eleonora",
  lastName: "Mattera",
}); //cloniamo student3 in student4
console.log("---STUDENT4", _student4);
// console.log("STUDENTE 4 PRIMA", student4);
// student4.firstName = "Eleonora";
// student4.lastName = "Mattera";
// delete student.cancella;

// console.log("STUDENTE 4 DOPO", student4);

console.log(
  "\n-------------------------------- ALTERNATIVE WAY TO ACCESS OBJECT PROPERTY --------------------------------"
);

let x = "hasWebcam";
student2["last-Name"];
console.log(student[x.concat("Webcam")]); //student2["hasWebcam"]

const fruitDictoinary = {
  apple: "mela",
  banana: "giallo",
  coconut: "cocco",
};
let fruit = "banana";
let definition = fruitDictoinary[fruit];
console.log("Definition for " + fruit + " " + definition);
