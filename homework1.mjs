// Example CSV data
//Refactoring Old Code
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
const rows = csvData.split('\n');//to rows

const headings = rows[0].split(',');

const numColumns = headings.length;
console.log(numColumns);

const data = [];

// Push headings as the first row
   data.push(headings);

// Iterate through the remaining rows
for (let i = 1; i < rows.length; i++) {
    // Split row into columns
    const columns = rows[i].split(',');

    // If the number of columns matches the number of headings, push the row to datan  array
    if (columns.length === numColumns) {
      data.push(columns);
    } else {
        console.log(`Skipping row ${i} due to inconsistent number of columns.`);
    }
}

// Cache the data for later use
const cachedData = data;

console.log(data);

console.log("______________________________________________________________")

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


let rows1 = [];
let keys = Object.keys(csv[0]);

for (let i = 0; i < csv.length; i++) {
  let row = {};
  let charObj = csv[i];

  for( let key of keys){

    row[key] = charObj[key];
  }
  rows1.push(row);

}
console.log(rows1);

console.log("______________________________________________________________")

// Given array of objects
const arrayOfObjects1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Remove the last element from the array
arrayOfObjects1.pop();

// Insert an object at index 1
arrayOfObjects1.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add an object to the end of the array
arrayOfObjects1.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Calculate the average age
let sum = 0;
for (let i = 0; i < arrayOfObjects1.length; i++) {
    sum += parseInt(arrayOfObjects1[i].age);
}
const averageAge = sum / arrayOfObjects1.length;

console.log(arrayOfObjects1);
console.log("Average Age:", averageAge);


console.log("______________________________________________________________")
//Part 5: Full Circle

// Given array of objects
const arrayOfObjects = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Convert array of objects back to CSV format
let csvData1 = '';
// Add headings
csvData1 += Object.keys(arrayOfObjects[0]).join(',') + '\n';

// Add data rows
arrayOfObjects.forEach(obj => {
    const values = Object.values(obj);
    csvData1 += values.join(',') + '\n';
});

console.log(csvData1);

