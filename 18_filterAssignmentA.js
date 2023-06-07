console.log("__________________________________________________________________________________");
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

const a1 = arrayNumbers.filter((element) => {
    return element > 50
})
console.log(` 1} All the numbers which are greater than 50 are =>  ${a1}`);
console.log("----------------------------------------------------------------------------------");
const evenNum = arrayNumbers.filter((element) => {
    return element % 2 == 0
})
console.log(` 2} All the Even numbers in a array are =>  ${evenNum}`);
console.log("----------------------------------------------------------------------------------");
const oddNum = arrayNumbers.filter((element) => {
    return element % 2 == 1
})
console.log(` 3} All the Odd numbers in a array are =>  ${oddNum}`);
console.log("----------------------------------------------------------------------------------");
const multiple5Num = arrayNumbers.filter((element) => {
    return element % 5 == 0
})
console.log(` 4} All the numbers which are multiple of "5" in a array are =>  ${multiple5Num}`);
console.log("----------------------------------------------------------------------------------");
const a2 = arrayNumbers.filter((element) => {
    return ((element > 20) && (element < 50))
})
console.log(` 5} All the numbers which are between 20 and 50 are =>  ${a2}`);
console.log("__________________________________________________________________________________");