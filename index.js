// Funzioni dichiarate con keyword function - subiscono l'hoisting, come se le dichiarazioni delle funzioni venissero spostate all'inizio del file

function bark() {
  console.log("BAU!");
  bark2();
}

// Function expression - variabile che contiene la funzione anonima

const bark2 = function () {
  console.log("WOOF!");
};

bark();

// dichiararle come function expression rispetto al vecchio metodo ci garatisce una linearità e sequenza di esecuzione prevedibile
// tendenzialmente è preferibile il secondo metodo

// Arrow functions
// una sintassi più breve per situazioni comuni o semplici

// con le arrow functions dovremo sempre dichiararle con una function expression, perché sono SOLO ANONIME
const arrow = () => {};

// funzione VOID - non ritorna NIENTE
const meow = () => {
  console.log("Meooow!");
};

meow();

// const meow2 = message => {
//   console.log(message.toUpperCase() + "!");
// };

// le parentesi per i parametri sono necessarie solo con parametri vuoti o con più di un parametro

// Funzione fruttifera (fruitful) - ha un valore in uscita con il return
// const meow2 = (message, symbol) => {
//   return message.toUpperCase() + symbol;
// }; // versione estesa

// Funzione fruttifera (fruitful) - ha un valore in uscita con il return
const meow2 = (message, symbol) => message.toUpperCase() + symbol; // versione concisa (con return implicito)

console.log(meow2("meeeeoooowwww", "!!!"));
console.log(meow2("meow", "?"));

const callingHuman = meow2("me me meooow", "?").toLowerCase();

console.log(callingHuman);

// Funzione fruttifera (fruitful) - ha un valore in uscita con il return
const sum = (n1, n2) => {
  return n1 + n2;
};

// const result = sum(2, 3);
// console.log(result);

console.log(sum(2, 3)); // 5
const result = sum(5, 1) + 10;
// chiamare la funzione sum ci restituisce SICURAMENTE un valore computato dalla funzione stessa, il suo valore di ritorno (return)
// questo è vero SOLO per le funzioni che hanno un return interno

// TUTTE LE ALTRE FUNZIONI si definiscono VOID perché non hanno un valore in uscita (di ritorno)

// l'arrow function ci dà la possibilità di avere un RETURN IMPLICITO

const sum2 = (n1, n2) => n1 + n2;

// la freccia SENZA GRAFFE e per UNA SINGOLA LINEA provoca un return implicito
console.log(sum2(9, 1));

// la differenza nel THIS

const myObj = {
  name: "Stefano",
  role: "Teacher",
  myMethod: function () {
    console.log("THIS", this); // this === myObj
    console.log("Name", this.name); // "Stefano"
  },
};

// il "this" nel contesto di un metodo (proprietà di oggetto con funzione) ci restituisce l'istanza dell'oggetto di appartenenza

myObj.myMethod();

// le arrow function non sono adatte a creare metodi

const myObj2 = {
  name: "Stefano",
  role: "Teacher",
  myMethod: () => {
    console.log("THIS", this); // oggetto globale Window, non più l'oggetto myObj2
    console.log("Name", this.name); // undefined perché su Window non esiste la proprietà name
  },
};

myObj2.myMethod();

// Differenza nell'utilizzo delle CONSTRUCTOR FUNCTIONS - funzioni che servono per creare oggetti in serie
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  console.log(this);
}

const teacher = new Person("Stefano", "Miceli"); // {name: "Stefano", surname: "Miceli"}
const teacher2 = new Person("Stefano", "Casasola"); // {name: "Stefano", surname: "Casasola"}

console.log(teacher.surname);
console.log(teacher2.surname);

// funzioni arrow NON POSSONO ESSERE CREATE COME CONSTRUCTOR FUNCTION
// const PersonArrow = (name, surname) => {
//   this.name = name;
//   this.surname = surname;
//   console.log(this);
// };

// const teacher3 = new PersonArrow("Riccardo", "Gulin"); // Error!
// console.log(teacher3.surname);

console.log("GLOBAL THIS", this);

// SPREAD OPERATOR (quello coi 3 puntini)

const person1 = {
  name: "Godwin",
  role: "Student",
  hasWebcam: true,
  gender: "M",
  area: { lat: "2198.0123", long: "20912.290" },
};

const newObj = {}; // nuova referenza di oggetto in memoria
const person2 = Object.assign(newObj, person1, { planet: "Earth" }); // stiamo spalmando le proprietà di person1 e dell'oggetto anoninmo con planet, dentro a newObj

console.log(person2);

const person3 = { ...person1, name: "Andrea" };
console.log(person3);

const objColor = {
  hairColor: "blonde",
};

const person4 = { ...person1, area: { ...person1.area }, ...objColor, name: "Tina", gender: "F" };

person4.area.lat = "9999.1";
console.log(person4);

const person5 = person1; // stesso oggetto, stessa area di memoria di person1. Modificare person5 altera inevitabilmente anche person1
const person6 = JSON.parse(JSON.stringify(person1)); // person1 deep cloned - tutte le sotto referenze clonate, perché siamo partiti nel costruire il nuovo oggetto da una semplicissima stringa! (JSON.stringify())

// Spread operator funziona anche con le stringhe
const justLetters = [..."Epicode is awesome!"];
console.log(justLetters);

// ma anche con gli array!
const animals = ["cat", "dog", "mouse", "rabbit"];

const animals2 = ["horse", "pig", "duck"];

const animals3 = animals.concat(animals2);
console.log(animals3);

const animals4 = [...animals, "goldfish", ...animals2, "monkey"];
console.log(animals4);

// REST operator (3 puntini nel contesto di parametri di funzione o destrutturazione di array, per raccogliere un infinito numero di parametri extra rispetto a quelli definiti prima )
const restTest = function (param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
};

restTest("Stefano", "Epicode", 50, 1, 90, 100, 230);

// DESTRUCTURING Objects

const car = {
  brand: "Ford",
  model: "Focus",
  color: "Silver",
  licensePlate: "AB123CD",
  year: 2017,
};

// const brand = car.brand;
// const model = car.model;

// console.log(car, brand, model);

// questa sintassi ci estrae i singoli valori contenuti nelle proprietà dell'oggetto,
// tramite una variabile che deve avere lo stesso nome della proprietà e che ne conterrà il valore corrispettivo
const { brand, licensePlate, year } = car;
// si possono saltare le proprietà che non vi interessano
console.log(brand, licensePlate, year);

// const person1 = {
//     name: "Godwin",
//     role: "Student",
//     hasWebcam: true,
//     gender: "M",
//     area: { lat: "2198.0123", long: "20912.290" }
//   };

// DESTRUCTURING FUNCTION PARAMETERS
// const student = function (obj) {
//   console.log(obj.name);
//   console.log(obj.hasWebcam);
//   console.log(obj.gender);
// console.log(obj.area.lat);
// console.log(obj.area.long);
// };

const student = function ({ name, role, hasWebcam, gender, area: { lat, long } }) {
  console.log(name);
  console.log(hasWebcam);
  console.log(role);
  console.log(gender);
  console.log(lat);
  console.log(long);
};

student(person1);

const letters = ["a", "b", "c", "d", "e", "f"];

const [first, , third, ...rest] = letters;

console.log(first, third, rest);

// TEMPLATE STRING
// una stringa che accetta valori dinamici, ritorni di linea (multilinea)

const template = `lorem ipsum ${first} 
sit dolor 
${car.licensePlate}`;

console.log(template);

// ARRAY METHODS

// .forEach()
// cicla tutti gli elelementi di una array fornito, e ne ritorna l'elemento ciclato in quel momento come parametro della funzione callback (interna)

// for (let i = 0; i < letters.length; i++) {
//   const elem = letters[i];
//   console.log(elem);
// }

letters.forEach(function (elem) {
  console.log("FOREACH elem", elem);
});

// animals4.forEach(function (animal) {
//   console.log("FOREACH animal", animal);
// });

let composedAnimalsString = "";
animals4.forEach((animal) => {
  composedAnimalsString += animal + " ";
});

console.log(composedAnimalsString);

// .map()
// è un metodo che vi serve a trasformare gli elementi di un array in qualche altra forma, o valore, e ottenere indietro un array popolato da questi nuovi elementi

const upperCaseAnimals = animals4.map((animal) => animal.toUpperCase());
console.log(animals4, upperCaseAnimals);

const upperCaseAnimalsHTML = animals4.map((animal) => "<div>" + animal.toUpperCase() + "</div>");

console.log("HERE", upperCaseAnimalsHTML);

// .filter()
// filtra gli elementi determinando quelli che faranno parte del nuovo array SE e solo SE passerrano un test che stabiliremo (tornando true/false dalla funzione)

const filteredAnimals = animals4.filter((animal) => !animal.endsWith("g"));

console.log(filteredAnimals);

const withoutC = letters.filter((letter) => letter.toLowerCase() !== "c");
console.log(withoutC);
