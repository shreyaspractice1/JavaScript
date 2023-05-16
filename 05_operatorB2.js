function maleMarriageEligibility(gender,age,boyName) {
    var result = (gender=="male" && age>= 21) ? `${boyName} You are eligible for marriage` : `${boyName} You are not eligible for marriage`;
    return result;
}
console.log("____________________________________________________________________");
console.log("1)");
var result1 = maleMarriageEligibility("male",25,"Bill Gates");
console.log(`${result1}`);
console.log("--------------------------------------------------------------------");
var result2 = maleMarriageEligibility("male",17,"Steve Jobes");
console.log((`${result2}`));

console.log("____________________________________________________________________");

function femaleMarriageEligibility(gender,age,boyName) {
    var result = (gender=="female" && age>= 18) ? `${boyName} You are eligible for marriage` : `${boyName} You are not eligible for marriage`;
    return result;
}
console.log("2)");

var result3 = femaleMarriageEligibility("female",16,"Jenifer");
console.log(`${result3}`);
console.log("--------------------------------------------------------------------");
var result4 = femaleMarriageEligibility("female",27,"Milinda Gates");
console.log((`${result4}`));
console.log("____________________________________________________________________");
