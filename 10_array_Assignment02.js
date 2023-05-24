console.log("---------------------------------------------------------------------------------------------------------");
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(` 1} Length of the given array is : "${arrayNumbers.length}"`);
//---------------------------------------------------------------------------------------
var firstElement = arrayNumbers[0];
console.log(` 2.1} First element of the given array is : "${firstElement}`);

var lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(` 2.2} Last element of the given array is : "${lastElement}"`);
//---------------------------------------------------------------------------------------
var thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(
  ` 3} Third Last element of the given array is : ${thirdLastElement}`
);
//---------------------------------------------------------------------------------------
console.log(` 4}  Even numbers in a array is : `);
for (let index = 0; index <= arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 2 == 0) {
    console.log(`      ${arrayNumbers[index]}`);
  }
}
//---------------------------------------------------------------------------------------
console.log(` 5}  Odd numbers in a array is :`);
for (let index = 0; index <= arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 2 == 1) {
    console.log(`      ${arrayNumbers[index]}`);
  }
}
//---------------------------------------------------------------------------------------
console.log(` 6}  Even positioned elements are : `);
var evenSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 == 0) {
    console.log(`      ${element}`);
    evenSum += arrayNumbers[index];
  }
}
  console.log(`  Sum of even positioned elemens is :  ${evenSum}`);
//---------------------------------------------------------------------------------------
    oddSum = 0;
console.log(` 7}  Odd positioned elements are : `);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 == 1) {
    console.log(`      ${element}`);
    oddSum += arrayNumbers[index]
  }
}
console.log(`  Sum of odd positioned elemens is :  ${oddSum}`);
//---------------------------------------------------------------------------------------
  var sum = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index];
    
  }
console.log(`  8}  Sum of all elements from array is : ${sum}`);
//---------------------------------------------------------------------------------------
console.log(`  9}  Number that are multiple of "5" is : `);
for (const index in arrayNumbers) {
  if (arrayNumbers[index] % 5 == 0) {
    console.log(`      ${arrayNumbers[index]}`);
  }
}
//---------------------------------------------------------------------------------------
console.log(
  `  10}  Is Number "115" available in given array ?   ${arrayNumbers.includes(
    115
  )}`
);
//---------------------------------------------------------------------------------------
console.log(
  `  11}  Is Number "23" available in given array ?   ${arrayNumbers.includes(
    23
  )}`
);
//---------------------------------------------------------------------------------------
arrayNumbers.splice(3, 0, 55, 66);
console.log(
  `  12}  After inserting "55" and "66" before index 3 is : ${arrayNumbers}`
);
//---------------------------------------------------------------------------------------
arrayNumbers.splice(4, 3);
console.log(
  `  13}  After deleting 3 elements starting from index 4 is : ${arrayNumbers}`
);
console.log("---------------------------------------------------------------------------------------------------------");