console.log(" 1} Performing Shallow Clone => ");
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
var clonedArray = arrayNums;
arrayNums.push(55, 66);
console.log(` Origional Array => ${arrayNums}`);
console.log(` Clonned Array   => ${clonedArray}`);
console.log(
  "-------------------------------------------------------------------------------"
);
console.log(" 2} Performing Deep Clone =>");

var deepClone = [...arrayNums];
deepClone.push(10, 25);

console.log(` Origional Array  => ${arrayNums}`);
console.log(` Clonned Array is => ${deepClone}`);
console.log(
  "-------------------------------------------------------------------------------"
);
console.log(" 3} Merge or Concatting Array => ");
var evenArray = [2, 30, 14, 8];
var concatedArray = [...arrayNums] + [, ...clonedArray];
console.log(` Given Array is    => ${arrayNums}`);
console.log(` Concated Array is => ${concatedArray}`);
console.log(
  "-------------------------------------------------------------------------------"
);
console.log(" 4} Creating 'Employee_Info' Object => ");
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,000INR",
    aug_month: "50,000INR",
    june_month: "65,000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
  },
  mobiles: ["+91 8983 37 5871", "1800 4565 6545", "+91 8669 18 3980"],
};
console.log(employee_info);
console.log(
  "-------------------------------------------------------------------------------"
);
console.log(" 5} ");
console.log(" Employee Address =>");
console.table(employee_info.address);
console.table(` Mobile Number's  => ${employee_info.mobiles}`);
console.log(
  "-------------------------------------------------------------------------------"
);
console.log(" 6} Performing Deep Clone Copy using 'JSON.stingfy ");

const deepCloned_emp_info = JSON.parse(JSON.stringify(employee_info));

(deepCloned_emp_info.salary.july_month = "80,000INR"),
  (deepCloned_emp_info.address.country = "United Kingdom");

console.log("Origional Salary => ");
console.table(employee_info.salary);

console.log("Updated Salary => ");
console.table(deepCloned_emp_info.salary);

console.log("Origional Country => ", employee_info.address.country);
console.log("Updated Country => ", deepCloned_emp_info.address.country);
