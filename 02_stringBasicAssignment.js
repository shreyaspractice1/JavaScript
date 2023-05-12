var givenString = "  Hey you are doing Good, keep it up   "
 
function stringAsItIs() { 
    console.log("---------------------------------------------------------------------------");
     console.log("1]");                                                 //1]
        console.log("String as it is = ",givenString);
        console.log("---------------------------------------------------------------------------");

         console.log("2]");
         var length = givenString.length;                                   //2]
         console.log("Length of string is =>",length); 
         console.log("---------------------------------------------------------------------------");

        console.log("3]");
        var trimString = givenString.trim();                                //3]
        console.log("Trimmed String & It's Length is =>",trimString,trimString.length);
        console.log("---------------------------------------------------------------------------");

        console.log("4]");
        var extraSpaceCount = (givenString.length) - (trimString.length);   //4]
        console.log("total no. of spaces in given string is =>",extraSpaceCount);
        console.log("---------------------------------------------------------------------------");

        console.log("5]");
        var firstChar = trimString.charAt(0);                               //5]
        var lastChar =  trimString.charAt(trimString.length-1);
        console.log("First & Last Character from the sting after string is => ",firstChar,lastChar);
        console.log("---------------------------------------------------------------------------");

    }
    
stringAsItIs();
// function stringLength() {
//     var length = givenString.length;
//     console.log("Length of string is =>",length);
// }
//     function stringTrim() {
//         var trimString = givenString.trim();
//         console.log("Trimmed String & It's Length is =>",trimString,trimString.length);
//     }
//     function extraSpaceCount() {
//         var extraSpaceCount = givenString.length - trimString.length;
//         console.log("total no. of spaces in given string is =>",extraSpaceCount);
//     }
//-----------------------------------------------------------
    
// console.log("1]");    // Function Call 1
// stringAsItIs();   
// console.log("---------------------------------------------------------------------------");
// console.log("2]");
// stringLength();       // Function Call 2
// console.log("---------------------------------------------------------------------------");
// console.log("3]");
// stringTrim();
// console.log("---------------------------------------------------------------------------");
// console.log("4]");
// extraSpaceCount();
