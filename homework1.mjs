//Part 1: Fizz Buzz
let i = 0;

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Finn Buzz");
  } else {
    console.log(i);
  }
}

//Prime Time

let n = 6;
let isPrime;

for (let i = n + 1; i > 0; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      true;
      break;
    }
  }
  false;
  console.log(`The next prime number after ${n} is ${i}`);
  break;
}

//Part 3: Feeling Loopy

const csv = [
  {
    id: 42,
    name: "Bruce",
    occupation: "Knight",
    age: 41,
  },

  {
    id: 63,
    name: "Blaine",
    occupation: "Quiz Master",
    age: 58,
  },
  {
    id: 98,
    name: "Bill",
    occupation: "Doctor’s Assistant",
    age: 26,
  },
];

let rows = [];
let keys = Object.keys(csv[0]);

for (let i = 0; i < csv.length; i++) {
  let row = {};
  let charObj = csv[i];

  for( let key of keys){

    row[key] = charObj[key];
  }
  rows.push(row);

}
console.log(rows);






console.log(rows);
  


// // const str = `id,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
// const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let placeholder = ``;
// let counter = 0;

// for (let char of str) {
//   switch (char) {
//     // If comma do this
//     case ',':
//       counter++;
//       if (!cell1) {
//         cell1 = placeholder;
//         placeholder = ``;
//       } else if (!cell2) {
//         cell2 = placeholder;
//         placeholder = ``;
//       } else {
//         cell3 = placeholder;
//         placeholder = ``;
//       }
//       break;
//     //If new line do this
//     case '\n':
//       counter++;
//       cell4 = placeholder;
//       placeholder = ``;
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = ``;
//       cell2 = ``;
//       cell3 = ``;
//       cell4 = ``;
//       break;
//     //If char do this
//     default:
//       counter++;
//       placeholder += char;

//       if (counter === str.length) { //If it's our last character we populate cell4 and print
//         cell4 = placeholder;
//         placeholder = ``;
//         console.log(cell1, cell2, cell3, cell4);
//         cell1 = ``;
//         cell2 = ``;
//         cell3 = ``;
//         cell4 = ``;
//         counter = 0;
//       }
//       break;
//   }
// }
// //Second kind
// for (let char of str) {
//   // If comma do this
//   if (char === ' ,') {
//     counter++;
//     if (!cell1) {
//       cell1 = placeholder;
//       placeholder = ``;
//     } else if (!cell2) {
//       cell2 = placeholder;
//       placeholder = ``;
//     } else {
//       cell3 = placeholder;
//       placeholder = ``;
//     }
//   } else if (char === ' \n') {
//     //If new line do this
//     counter++;
//     cell4 = placeholder;
//     placeholder = ``;
//     console.log(cell1, cell2, cell3, cell4);
//     cell1 = ``;
//     cell2 = ``;
//     cell3 = ``;
//     cell4 = ``;
//   } else {
//     counter++;
//     placeholder += char;

//     if (counter === str.length) {
//       //If it's our last character we populate cell4 and print
//       cell4 = placeholder;
//       placeholder = ``;
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = ``;
//       cell2 = ``;
//       cell3 = ``;
//       cell4 = ``;
//       counter = 0;
//     }
//   }
// }
