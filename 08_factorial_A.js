function factorialOfNum(num) {
    let result = 1;
    for (let index = num; num <= 1; index--) {
      result *= num ;
    }
          console.log(`Factorial of ${num} is ${result}`);
  }
  console.log("------Factorial of Number------");
  console.log("");
  factorialOfNum(5);
  factorialOfNum(3);
  factorialOfNum(null);
  factorialOfNum(8);
  factorialOfNum(undefined);
  factorialOfNum(9);
  factorialOfNum(0);