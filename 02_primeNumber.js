function primeOrNot(num) {
  
  statusy = 1
  if(num > 2)
  {
    for(i = 2; i<num; i++)
    {
      if(num % i == 0)
      {
        statusy=0;
        break;
      }
  
    }
  }
  
  if(statusy == 1 && num > 2)
  {
    console.log("prime");
    
  }
  else if (num < 2)
  {
    console.log("Invalid Input");
  }
  else {
    console.log("Not Prime");
  }
  }
  primeOrNot(11)
  primeOrNot(10)
  primeOrNot(0)
  primeOrNot(15)
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
