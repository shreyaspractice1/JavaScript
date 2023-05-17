var result = 0 == '0';
console.log(`${result} ${typeof(result)}`);

var rst1 = 0=='0'
console.log(` 1 ${rst1}`);

var rst2 = 0 == false;
console.log(` 2 ${rst2}`);

var result3 = null != undefined;
console.log(` 3 ${result3}`);

var result4 = 1 == [1];
console.log(` 4 ${result4}`);

var result5 = 1 == true;
console.log(` 5 ${result5}`);

var result6 = 1 == '1';
console.log(` 6 ${result6}`);
console.log(" ");
console.log(` ${rst7 = '3' + 2}`);
console.log(` ${rst7 = '3' + true}`);
console.log(` ${rst7 = true + 'undefined'}`);
console.log(` ${rst7 = 'null'+ 3}`);