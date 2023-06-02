function prime(num) {

    for (let index = 2; index < num; index++) {
        if (  num % index == 0) {
            console.log(` ${num} is not a prime number`);
            break
        }

        if (num % index != 0){

            console.log(` ${num} is a prime number`);
            break
        }
        else{
            console.log(` ${num} is a prime number`);
        }
    }
}
prime(11)
prime(10)
prime(0)
// //---------------------------------------------------------------------------------
console.log("================== $ First 15 Prime Number's $ ==================");
let count = 0;
let num = 2;
while (count < 15) {
  let isPrime = true;
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(` ${num}`);
    count++;
  }
  num++;
}
