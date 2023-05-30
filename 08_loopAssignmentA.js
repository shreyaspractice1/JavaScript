var str = "I am very good IT Developer"
var count =0;
for (let index = 1; index <= str.length; index++) {
     console.log(index);
    var char = str.charAt(index);
    if( char.includes["a","e","i","o","u"]){
        console.log(` Vowel is ${char[index]}`);
        count++;
     }   
}  

//---------------------------------------------------------------------------------------
function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  var num = 5;
  var factorialResult = factorial(num);
  var cubeResult = factorialResult * factorialResult * factorialResult;
  var sum = cubeResult;
  
  console.log(`The cube of the factorial of ${num} is ${cubeResult}.`);
  console.log(`The sum is ${sum}.`);
  