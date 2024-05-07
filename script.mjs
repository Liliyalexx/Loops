// // console.log("Hello")

// // // for (initialization; condition; afterthought) {
// // // 	statements
// // // }

// // for (let i = 0; i < 10; i++) {
// // 	console.log("Hello" + " " + i);
// // }

// // for (let i = 10; i >=1 ; i --){
// //     console.log("Hello" + " " + i)
// // }

// // for (let i = 1; i < 20 ; i++) {
// //     if(i%2 ==1)
// // 	console.log( i);

// // }
// // console.log("=======================================")
// // //=====
// // for (let i = 1; i < 10 ; i += 2) {
// // 	console.log( i);
// // }

// // console.log("=======================================")

// // for (let i = 0; i < 20 ; i++) {
// //     if(i%2 ==0)
// // 	console.log( i + " Is EVEN");

// // }

// // console.log("=======================================")
// // for (let i = 1; i < 20 ; i+=2) {
// // 	console.log( i + " Is ODD");

// // }
// // console.log("=======================================")

// // for (let i = 3; i < 20 ; i++) {
// //     if( i% 3 ==0)
// // 	console.log( i + " Is ODD");

// // }
// // console.log("=======================================")

// // let text = " ";
// // for (let i = 0; i < 7 ; i++) {
// //   text +="#";
// // 	console.log( text);

// // }
// // console.log("=======================================")


// // for ( let i = 1; i < 20; i++ ){
// //     if( i === 1 ){
// //         console.log( i + " Number is ODD");
// //     } else if( i % 2 == 0){
// //         console.log(i + " Number is EVEN");
// //     } else if ( i % 3 == 0){
// //         console.log(i + " Number is ODD");
// //     } else{
// //        console.log ( i + " Not a number")

// // }
// // }

// // console.log("=======================================")

// // //strings

// // let str1 = "Hello World";
// // console.log(str1.length);

// // for (let i = 0; i < str1.length; i++) {
// // 	console.log(str1[i]);
// // }

// // console.log("=======================================")
// // //For ... In Loops


// // const word = "Hello World";
// // console.log(word.length);

// // //for ---in , iterable placeholder represents the index
// // for (const i in word) {
// // 	console.log(`${word[i]} is the ${i}th index in the word`);
// // }

// // //for .... of loop, iterable placeholder represents the char/element itself
// // const word1 = "Hello World";
// // console.log(word1.length);

// // for (const c of word1) {
// // 	console.log(c);
// // }

// console.log("=======================================")

// // const str = "Hello World";

// // for (let i = 0; i < str.length; i++) {
// // 	if (str[i] == "l") {
// // 		continue;
// // 	}

// // 	console.log(str[i]);
// // }

// console.log("=======================================")
// const str = "Hello World";

// for (const i in str) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// console.log("=======================================")

// for (const c of str) {
// 	if (c == "l") {
// 		continue;
// 	}

// 	console.log(c);
// }

// console.log("=======================================")
// for (const c of str) {
// 	if (c == "l") {
// 		break;
// 	}

// 	console.log(c);
// }


// console.log("=======================================")

// //While loop example

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;//14, 6, 2, 0

// 	if (x % 1 != 0) { //14, 6, 2, 0
// 		break;
// 	}
	
// 	console.log(x);
// }


// console.log("=======================================")
// let x1 = 30
// for (x1 = x1/2 - 1; x1 >= 0; x1 = x1/2 - 1) {
// 	if (x1 % 1 != 0) {
// 		break;
// 	}

// 	console.log(x1);
// }

// //Exercise
// // Write while loops to accomplish the following tasks:

// // Count down to 0 from a given number.
// // Log integers in multiples of 3 as long as they are less than 35.
// // Print integers in multiples of 5 as long as they are less than 100.
// // Print integers between 0 and 20 with the following conditions:

// // All numbers divisible by 2 should be multiplied by 3 before they are output.
// // All other integers should not be output.
// // Print all prime numbers between 0 and 20.

// console.log("=======================================")

// //While loop example

// let num = 30;

// while (num >= 0) {
	
// 	num--;

// 	if (num === 0) { 
// 		break;
// 	}
	
// 	console.log(num - 1);
// }

// console.log("=======================================")


// let int = 3;

// while (int <=35 ) {
// 	console.log(int)
// 	int+=3;
// 	}

//     console.log("=======================================")
	
// // Print integers between 0 and 20 with the following conditions:
// // All numbers divisible by 2 should be multiplied by 3 before they are output.
// // All other integers should not be output.
// // Print all prime numbers between 0 and 20.
// let num1 = 0;

// while (num1 <= 20) {
//   if (num1 < 4) {
//     console.log(`${num1} is a prime num1ber`);
//   } else if (num1 % 2 == 0) {
//     console.log(num1 * 3);
//   } else if (num1 % 2 !== 0 && num1 % 3 !== 0) {
//     console.log(`${num1} is a prime number`);
//   }

//   num1++;
// }
// console.log("=======================================")


// // Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// // Write a loop that outputs how many quarters Romeo received.

// let quarters = 0;
// let bill = 10;
// let cookie = 4;
// let change = bill - cookie;
// while (change != 0){
//     change -= 0.25;
//     quarters++;
// }
// console.log(`Romeo received ${quarters} quarters`)

console.log("=======================================")

// let x5 = 10;

// do {
// 	x5--;
// 	console.log(x5);
// } while (x5 > 50);
// let x = 0;
// while (x < 10){ //while x is less then 10 
//     x++; //add one to x
//     console.log(x);
//     if(x == 5 ) continue;
//     console.log(x);
    
// }

for ( let i = 0; i < 10; i++){

    for ( let j = 0; j < 10; j++){

        console.log( i, j);

    }
}
console.log("=======================================")

// for ( let i = 0; i < 10; i++){

//     for ( let j = 0; j < 10; j++){
//         if(j % 2 === 0)break;
     
        

//         console.log( i, j);

//     }
// }

console.log("=======================================")
// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			break;
// 		}
// 	}
// }

// console.log("=======================================")
// let x = 1;
// let y = 1;

// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;

// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;

// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// 		} else if (y % 5 == 0) {
// 			continue myLoop;
// 		}
// 	}
// }
// for (i =0; i=0; i=0) {
//     console.log(i)
//  }
//  repeat();


 let sum = 0;

 for (let i = 0; i < 5; i++) {
 
   if (i % 2 === 0) continue;
 
 sum += i;
 console.log(sum);
 
 }
 
 