var leapYear = function isLeapYear(year) {
    if (year == NaN || year == undefined || year == " " || year == null) {
        console.log(` You have entered ${year} And is Invalid Input`);
    }
    else if ( year %4 == 0) {
        console.log(`You have entered  ${year} is a Leap Year...`);
    }
    else {
        console.log(`You have entered ${year} is not a Leap year...`);
    }
}
console.log("_________________ ### Leap Year Or Not ! ### _________________");
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
console.log("_____________________________________________________")

//________________________________________________________________________________________________________________

// var leapYear = function isLeapYear(year){
//     switch (key) {
//         case if (year %4 == 0) {
//             console.log(`You have entered  ${year} is a Leap Year...`);
//         }:
            
//             break;
//         switch (key) {
//             case value:
                
//                 break;
        
//             default:
//                 break;
//         }
//         default:
//             break;
//     }
// }