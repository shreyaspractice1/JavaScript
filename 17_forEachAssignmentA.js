const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601]
console.log("-----------------------------------------------------------------------------------------------");
console.log(` 1}  Log the array elements with it's index using forEach() with arrow function => `);
// let element = [];
arrayNumbers.forEach((element,index) => {
    console.log(element);
});
console.log("-----------------------------------------------------------------------------------------------");
console.log(` 2}  Log the Positive Number's using forEach() with arrow function => `);
arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
})
console.log("-----------------------------------------------------------------------------------------------");
console.log(` 3}  Log the Negative Number's using forEach() with arrow function => `);
let negativeNum = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        negativeNum.push(element)
    }
    
})
console.log(negativeNum);
console.log("-----------------------------------------------------------------------------------------------");
console.log(` 4}  Log the Even Number's using forEach() with arrow function => `);
let evenNum = [];
arrayNumbers.forEach(element => {
    if (element % 2 == 0) {
        evenNum.push(element)
    }
})
console.log(evenNum);
console.log("-----------------------------------------------------------------------------------------------");
console.log(` 5}  Log the Sum of all elements from the arrayNumbers and log the Sum value on console => `);
let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element
})
console.log(`     Sum => ${sum}`);
console.log("-----------------------------------------------------------------------------------------------");
console.log(` 6}  Log the only Even Indexed array values on console => `);
    let index = [0];
    let element
    arrayNumbers.forEach((element,index) => {
      if (index % 2 == 0) {
        console.log(`  Position : ${index} , Value : ${element}`);
      }
    })
console.log("-----------------------------------------------------------------------------------------------");