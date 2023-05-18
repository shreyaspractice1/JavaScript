console.log("_________________________________________________________________________");
console.log("###################  Voter Eligibility  ###################");
console.log(" ");
function viteEligibility(value){
    var age = value;

    if (age>=18 && age <=120) {
        console.log(` Congratulations...! Your age is "${age}", you are "Eligible" for voting`);
    } else {

        if (age <=18 && age >0 ) {
            console.log(` Sorry...! Your age is "${age}", you are " Not-Eligible" for voting`);
        } else {
            if ( age == 0 || age < 0 || age == null || age || undefined) {
                console.log(`You have entered the age "${age}" and is In-valid`);
                
            } else {
                console.log("nope");
            }
        }
}
}
viteEligibility(45);
console.log("-------------------------------------------------------------------------");
viteEligibility(17);
console.log("-------------------------------------------------------------------------");
viteEligibility(8);
console.log("-------------------------------------------------------------------------");
viteEligibility(20);
console.log("-------------------------------------------------------------------------");
viteEligibility(-10);
console.log("-------------------------------------------------------------------------");
viteEligibility(200);
console.log("-------------------------------------------------------------------------");
viteEligibility(0);
console.log("-------------------------------------------------------------------------");
viteEligibility(undefined);
console.log("-------------------------------------------------------------------------");
viteEligibility(null);
console.log("_________________________________________________________________________");
