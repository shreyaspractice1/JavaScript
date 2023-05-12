console.log("------------------------------------------------");
console.log("1]");

var name1 = "sweety";
var name2 = "cutiee";

function swapVariable( valueOne,valueTwo) {
    console.log("Values Before Swap :",valueOne,valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("Values After Swap : ",valueOne,valueTwo);
}
    swapVariable(name1,name2);

console.log("------------------------------------------------");
console.log("2]");
var num1 = 100;
var num2 = 200;
var num3 = 300;

function swapVariables(valueOne, valueTwo,valueThree){
    console.log("Values Before Swap :",valueOne,valueTwo,valueThree);
var temp = valueOne;
valueOne = valueTwo;
valueTwo = valueThree;
valueThree = temp;
    console.log("Values After Swap : ",valueOne,valueTwo,valueThree);
}
swapVariables(num1,num2,num3);
console.log("------------------------------------------------");

