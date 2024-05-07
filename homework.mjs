
//Part 1: Fizz Buzz
let i = 0;

for( let i = 1; i < 100; i++){
    if(i % 3=== 0){
        console.log("Fizz");
    } else if ( i % 5 === 0){
        console.log("Buzz");
    } else if ( i % 3 === 0 && i % 5 ===0 ){
        console.log( "Finn Buzz");
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
  false 
    console.log(`The next prime number after ${n} is ${i}`);
    break;
}
  
//Part 3: Feeling Loopy

const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = '';
let row = [];

for (let i = 0; i < csv.length; i++) {
  let char = csv[i];

  if (char === ',') {
    row.push(cell);
    cell = '';
  } else if (char === '\n') {
    row.push(cell);
    console.log(row.join(', '));
    row = [];
    cell = '';
  } else {
    cell += char;
  }
}



