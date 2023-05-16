string1 = "JavaScript";
string2 = "Google Chrome";
string3 = "Developer Smart";
function squareOfWordLength(){
    
 var strLength1 = string1.length;
 var squareOfWordLength = strLength1 * strLength1;
 console.log("length of the word is =>",strLength1); 
 console.log("And it's length square is =>",squareOfWordLength);
 console.log("------------------------------------------------------------------------------------------------------------");
 var strLength2 = string2.length;
 var squareOfWordLength = strLength2 * strLength2;
 console.log("length of the word is =>",strLength2);  
 console.log("And it's length square is =>",squareOfWordLength);
 console.log("------------------------------------------------------------------------------------------------------------");
 var strLength3 = string3.length;
 var squareOfWordLength = strLength3 * strLength3;
 console.log("length of the word is =>",strLength3); 
 console.log("And it's length square is =>",squareOfWordLength);



}
console.log("______________________________________________________________________________________________________________");
console.log("1)");
squareOfWordLength();
console.log("______________________________________________________________________________________________________________");

console.log("2)");
console.log("I am Angular Developer");
function piu() {
    var givenString = "I am Angular Developer";
    var strLength = givenString.length;
    var totalWords = givenString.split(" ");
    var result1 = (strLength / totalWords.length);
    var result2 = (strLength * totalWords.length);
    console.log("2.1)");
    console.log(`Length of the string is => ${strLength}`);
    console.log("Divide total number of words available is =>",totalWords.length);
    console.log(`Length of string divide by total number of words available on string is => ${result1}`);
    console.log("------------------------------------------------------------------------------------------------------------");
    console.log("2.2)");
    console.log(`String length is => ${strLength}`);
    console.log(`Length of the string is => ${strLength} and after multiplication total number of string is => ${result2}`);
    console.log("______________________________________________________________________________________________________________");
}




piu();

