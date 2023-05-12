console.log("------------------------------------------------");
console.log("1]");
function shortAim(){
    console.log("I want to become a Good Angular Developer.");
}
function longAim(){
    console.log("I want to become a passionate Cloud & DevOps Engineer.");
}
shortAim();
longAim();
  


console.log("------------------------------------------------");
    console.log("2]");
    function personalDetails(firstName, lastName, collegeName){
    console.log("First Name :",firstName);
    console.log("Last Name :",lastName);
    console.log("College Name :",collegeName);
 }

    personalDetails("Shreyas","Deshpande","Fabtech");


    console.log("------------------------------------------------");
    console.log("3]");
    


    var name1 = "online";
    var name2 = "offline";

    function swapDude(valueOne,valueTwo){   //Arguments
        console.log("value before Swap :",valueOne,valueTwo);
        var temp = valueOne;
        valueOne = valueTwo;
        valueTwo = temp;
        console.log("value after Swap :",valueOne,valueTwo);
    }   
        console.log("3.1");
        swapDude(name1,name2);
        console.log("------------------------------------------------");


        console.log("3.2");
        swapDude("Virat","Anushka");

        console.log("3.3");
        swapDude(1000,2000);

        console.log("------------------------------------------------");
        console.log("4]");
        
            var value1 = "a";
            var value1 = "b";
            var value1 = "c";

        function addThreeValues(){
            console.log("values before Swap :",valueOne,valueTwo,valueThree);
            var temp = valueOne;
            valueOne = valueTwo;
            valueTwo = valueThree;
            valueThree = temp;
            console.log("values after Swap :",valueOne,valueTwo,valueThree);
        }
            addThreeValues("aa", "bb","cc");


 var text1 = "hello";
 var text2 = "good";
 var text3 = "morning";
 var num1 = 10.23;
 var num2 = 600;
 var num3 = 40;
 console.log("4.1 Add three values");
function addThreeValues(arg1 ,arg2,arg3){
    var result = arg1 + arg2 + arg3;
    console.log("addition is:",result);
}
console.log("4.2");
 addThreeValues(10.23, 600,40)
 console.log("4.3");
 addThreeValues(text1,text2,text3)
 console.log("------------------------------------------------");
