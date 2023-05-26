const arrayFruits = ["Banana","Orange","Apple","Mango","Water-Melon"];
console.log("_________________________________________________________________________________________________________________________________");
console.log(` Given array is : ["Banana","Orange","Apple","Mango","Water-Melon"]`);
console.log("_________________________________________________________________________________________________________________________________");
console.log(" ");
var firstElement = arrayFruits.slice(0,1);
console.log(`1.1} First element of the array is : ${firstElement}`);
var lastElement = arrayFruits.slice(-1);
console.log(`1.2} Last element of the array is : ${lastElement}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
        arrayFruits.unshift("Papaya")
console.log(`2} After adding "Papaya" before element "Banana" is ${arrayFruits}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
        arrayFruits.splice(4,1)
console.log(`3} After removing "Mango" from array is : ${arrayFruits}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
        arrayFruits.push("Pineapple")
console.log(`4} Inserting element "Pineapple" at the last position in array is : ${arrayFruits}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
        arrayFruits.splice(4,0,"Dragon-Fruit")
console.log(`5} Inserting element "Dragon-Fruit" before "Water-Melon" in array is : ${arrayFruits}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
        arrayFruits.splice(2,1,"Kiwi")
console.log(`6} Replacing the element "Orange" with "Kiwi" => ${arrayFruits}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
        var fruit=arrayFruits.slice(1,5)
console.log(`7} Log the elements starting from index 1 to 4 => ${fruit}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
console.log(` 8} Last 3 elements of the array is ${arrayFruits.splice(-3)}`);
