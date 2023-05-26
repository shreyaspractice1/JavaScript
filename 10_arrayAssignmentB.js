function countCharA(word) {
    var count = 0;
    for (let index = 0; index < word.length; index++) {
        let char = word.charAt(index);
        if (char == "a" || char == "A") {
            count++;
        }
       
    }
   return count;
    
}
console.log("---------------------------------------------------------------------------");
console.log(`1}  Given string is: "I AM Learning JavaScript, The Language of internet"`);
var totalCharOf1 = countCharA("I AM Learning JavaScript, The Language of internet");
console.log(` Total number of "a" and "A" available in the String is => ${totalCharOf1}`);
console.log("---------------------------------------------------------------------------");
console.log(`2}  Given string is: "My favourite movie is LAggAn"`);
var totalCharOf2 = countCharA("My favourate movie is LAggAn");
console.log(` Total number of "a" and "A" available in the String is => ${totalCharOf2}`);
console.log("---------------------------------------------------------------------------");
