var greaterNumber = function greatNum(num1,num2) {
   var result = num1>=num2 ? `${num1} is Greater Number` : `${num2} is Greater`
   console.log(`${result}`);
}
console.log("___________________________________________________________________");
console.log("1)");
greaterNumber(10,-10);
console.log("-------------------------------------------------------------------");
greaterNumber(800,899);


var isEvenOrOdd1 = function evenOdd1(num) {
var rst1 = num%2 == 0 ? `${num} is a Even Number` : `${num} is a Odd Number`;
console.log(`${rst1}`);

}

var string1 = "JavaScript";
var string2 = "Developer";  
var string3 = "Google";
var num1 = string1.length;
var num2 = string2.length;
var num3 = string3.length;

var num = num1, num2, num3;

var isEvenOrOdd2 = function evenOdd2(num) {
    var rst21 = num1 % 2 == 0 ? `Length of the "${string1}" word is ${num1} And is an Even Number` : `Length of the "${string1}" word is ${num1} And is an Odd Number`;
    console.log(`${rst21}`);
 
    var rst22 = num2 % 2 == 0 ? `Length of the "${string2}" word is ${num2} And is an Even Number` : `Length of the "${string2}" word is ${num2} And is an an Odd Number`;
    console.log(`${rst22}`);
 
    var rst23 = num3 % 2 == 0 ? `Length of the "${string3}" word is ${num3} And is an Even Number` : `Length of the "${string3}" word is ${num3} And is an Odd Number`;
    console.log(`${rst23}`);
 }  
 


console.log("___________________________________________________________________");
console.log("2)");
isEvenOrOdd1(29);
console.log("-------------------------------------------------------------------");
isEvenOrOdd1(44);
console.log("-------------------------------------------------------------------");
isEvenOrOdd1(0);
console.log("-------------------------------------------------------------------");
isEvenOrOdd1(101);
console.log("___________________________________________________________________");
console.log("3)");
isEvenOrOdd2(num1, num2, num3);
console.log("___________________________________________________________________");