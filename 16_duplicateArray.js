console.log("------------------------------------------------------------");
const arrayNum = [11,3,4,11,4,7,3];
const setOfNum = [...new Set(arrayNum)]
console.log(` Given element of a array is :  ${arrayNum}.`);
console.log(` After removing Duplocate element from Array : ${setOfNum}.`);
console.log("------------------------------------------------------------");
const input = 'How are you mate.'
const words = input.split(' ')
let result = []

for (const word of words) {
    const length = word.length - 1
    let str = ''
    for(let index = 0; index <= length; index++) {
        const char = word.charAt(index) 
        str = str.concat('', index === 0 || index === length ? char.toUpperCase() : char)
    }
   result.push(str)
}
console.log(` Given String is :    "${input}"`);
console.log(` Required Output is : "${result.join(' ')}"`);
console.log("------------------------------------------------------------");
