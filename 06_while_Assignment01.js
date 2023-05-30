console.log(` 1}  Print the numbers from 5 to 15 is ==> `);
var i1 = 5
while (i1 <= 15) {
    console.log(`  ${i1}`);
    i1++;
}
console.log("-----------------------------------------------------------------------");
console.log(` 2} Print number from 50 to 40 is ==> `);
var i2 = 50;
while (i2 >= 40) {
    console.log(i2);
    i2--;
}
console.log("-----------------------------------------------------------------------");
console.log(` 3} Finding first 15 Odd Numbers ==> `);
var num = 1;
var count = 0;
while (count < 15) {
    if (num % 2 != 0) {
        console.log(num);
         count++; 
         
    }    
    num++;

    
}
console.log("-----------------------------------------------------------------------");
console.log(` 4} Finding first 10 Even Numbers ==> `);
var num = 1;
var count = 0;
while (count < 10) {
    if (num % 2 == 0) {
        console.log(num);
         count++; 
         
    }    
    num++;

    
}
console.log("-----------------------------------------------------------------------");
console.log(` 5} Printing Table of 5 ==> `);
    var num = 5 ;
    count = 0;
    while (count < 10 ) {
        if (num % 5 == 0) {
            console.log(num);
             count++; 
             
        } 
        num++;
    }
    
    console.log("-----------------------------------------------------------------------");
console.log(` 6}  Printing Table of 10 ==> `);
var num = 10 ;
    count = 0;
    while (count < 10 ) {
        if (num % 10 == 0) {
            console.log(` + ${num} +`);
             count++; 
             
        } 
        num++;
    }
    console.log("-----------------------------------------------------------------------");
    // console.log(` 7}  Printing Table of 10 inReverse order ==> `);
    // var num = 100 ;
    // count = 0;
    // while (count < 10 ) {
    //     if (num % 10 == 0) {
    //         console.log(num);
    //          count++; 
             
    //     } 
    //     num--;
    // }
    console.log(" this is change...");
    var num = 100;
    console.log("-----------------------------------------------------------------------");
    
    console.log(`7.Table of 10 in reverse order:`);
let t = 100;
let reverseTable = "";
while (t >= 10) {
  reverseTable = reverseTable + " " + t;
  t = t - 10;
}
console.log(reverseTable);
