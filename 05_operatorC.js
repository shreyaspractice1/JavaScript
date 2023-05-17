var TCSeligibility = function eligibility(gradScore, HSCScore, SSCScore, Name) {
  var result =
    gradScore >= 70 || HSCScore >= 80 || SSCScore >= 90
      ? `Congrats ${Name} you are eligible for TCS Interview`
      : `Unfortunately ${Name} you are not eligible for the TCS Interview`;
  console.log(`${result}`);
};
console.log("      ********** TCS Interview Eligibility **********           ");
console.log("                                                     ");
console.log("_______________________________________________________________");
console.log("1)");
TCSeligibility(80, 86, 90, "shreyas");
console.log("---------------------------------------------------------------");
console.log("2)");
TCSeligibility(70, 65, 55, "Jack");
console.log("---------------------------------------------------------------");
console.log("3)");
TCSeligibility(60, 79, 88, "David");
console.log("_______________________________________________________________");
