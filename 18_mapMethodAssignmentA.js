console.log("-----------------------------------------------------------------------------------------------");
console.log(`  1} Adding "10" into each element and log on console => `);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
let arrayTransform = [];
    arrayNumbers.forEach((element) => {
        arrayTransform.push(element + 10 )
    })
    console.log(arrayTransform);

    console.log("-----------------------------------------------------------------------------------------------");
    console.log(`  2} Square each element and log on console => `);
    let arraySqr = [];
    arrayNumbers.forEach((element) =>{
        arraySqr.push(element * element)
    })
    console.log(arraySqr);

    console.log("-----------------------------------------------------------------------------------------------");
    console.log(`  3} Add the index value into it's corresponding each array element and log new array on console => `);
        let arrayIndexAdd = [];
        arrayNumbers.forEach((element,index) =>{
            arrayIndexAdd.push(element + index)
        })
        console.log(arrayIndexAdd);
        console.log("-----------------------------------------------------------------------------------------------");