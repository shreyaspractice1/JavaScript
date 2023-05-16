var greaterNumber = function greatNum(num1,num2) {
   var result = num1>=num2 ? `${num1} is Greater Number` : `${num2} is Greater`
   console.log(`${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);



var isEvenOrOdd1 = function evenOdd1(num) {
var rst1 = num%2 == 0 ? `${num} is a Even Number` : `${num} is a Odd Number`;
console.log(`${rst1}`);

}

var string1 = "JavaScript";
var string22 = "Developer";  
var string3 = "Google";
var num1 = string1.length;
var num22 = string22.length;
var num3 = string3.length;

var num = num1, num22, num3;

var isEvenOrOdd2 = function evenOdd2(num) {
    var rst21 = num1 % 2 == 0 ? `Length of the "${string1}" word is ${num1} And is an Even Number` : `${num1} is an Odd Number`;
    console.log(`${rst21}`);
 
    var rst22 = num22 % 2 == 0 ? `Length of the "${string22}" word is ${num22} And is an Even Number` : `${num22} is an Odd Number`;
    console.log(`${rst22}`);
 
    var rst23 = num3 % 2 == 0 ? `Length of the "${string3}" word is ${num3} And is an Even Number` : `${num3} is an Odd Number`;
    console.log(`${rst23}`);
 }
 



isEvenOrOdd1(29);
isEvenOrOdd1(44);
isEvenOrOdd1(0);
isEvenOrOdd1(101);
isEvenOrOdd2(num1, num22, num3);







// 
// var stringLength1   = string1.length;
// var stringLength2   = string2.length;
// var stringLength3   = string3.length;
// var isEvenOrOdd2 = function evenOdd2(string1) {
//   var rst2 = stringLength1%2 == 0 ? `${stringLength1} is Even Number` : `${stringLength1} is Odd Number`;  
//   var rst2 = stringLength2%2 == 0 ? `${stringLength2} is Even Number` : `${stringLength2} is Odd Number`;  
//   var rst2 = stringLength3%2 == 0 ? `${stringLength3} is Even Number` : `${stringLength3} is Odd Number`;  

