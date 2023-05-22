var str = "I am very good IT Developer"
var count =0;
for (let index = 1; index <= str.length; index++) {
    console.log(index);
    var char = str.charAt(index);

    if( char.includes["a","e","i","o","u"]){
        console.log(` Vowel is ${char}`);
        count++;
     }

    //if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || 
    //    char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
    // console.log(`Vowel is ${char}`);
    //   count++;
    //}
   
}
console.log(` Given string is ${str}`);
console.log(` Count the total vowels : ${count}`);
