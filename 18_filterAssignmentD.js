class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("_________________________________________________________________________");
console.log(`  Add all employee object inside array => `);
let arrayEmps = [];
arrayEmps = array_employees.map((employee) =>{
    return employee.emp_name;
   
})
console.table(arrayEmps);
console.log("----------------------------------------------------------------------");
console.log(`  1} Find all the employees from "Wipro" Company => `);
    
    const Wiproemployees = array_employees.filter( (employee) => {
        return employee.emp_company == "Wipro"
    }).map ((employee) =>{
        return employee.emp_name
    })
    console.log(Wiproemployees);
    console.log("----------------------------------------------------------------------");
    console.log(`  2} Find all the employees from "IT" and "HR" Dept. => `);

    const ITHRemployee = array_employees.filter((employee) => {
        return (employee.emp_dept == "IT") || (employee.emp_dept == "HR") 
            
        
    }).map((employee) => {
        return employee.emp_name
    })
    console.log(ITHRemployee);
    console.log("----------------------------------------------------------------------");
    console.log(`  3} Find all the employees whose emp ID's are greater than 50 => `);

    const idGreater50 = array_employees.filter((employee) =>{
        return employee.emp_id > 50
    }).map((employee) => {
        return (employee.emp_name)
    })
    console.log(idGreater50);
    console.log("----------------------------------------------------------------------");
    console.log(`  4} Find all the employees whose name starts with "A", "V", "M" are => `);

    const startLetters = array_employees.filter((employee) => {
        return (employee.emp_name.startsWith(("A")) || employee.emp_name.startsWith(("V")) || employee.emp_name.startsWith(("M")))
            //  employee.emp_name
        
    }).map((employee) =>{
        return employee.emp_name
    })
    console.log(startLetters);
    console.log("----------------------------------------------------------------------");
       
    // const allDeptEmployee = array_employees.filter((employee)=>{
    //       return employee.emp_dept;
    // });
    // let sumSalary = 0;
    // allDeptEmployee.forEach((employee)=>{
    //  sumSalary = sumSalary +employee.emp_salary;
    // }); 
    // const average = sumSalary /allDeptEmployee.length;
    // console.log(` 5} Average salary of the employee of all dept. => ${average}`);
    
    let employee;
    const empSalaries = array_employees.map((employee) => {
        return employee.emp_salary;
    }).reduce((runningTotal,value) => {
        return runningTotal + value
    })
    let average = empSalaries / array_employees.length
    console.log(`  5} Average salary of the employee of all dept. => ${average} `);

    console.log("----------------------------------------------------------------------");
    const itDeptAverage = array_employees.filter((employee)=>{
      return employee.emp_dept=="IT";
});


let sumSalary1 = 0;
itDeptAverage.forEach((employee)=>{
  sumSalary1 = sumSalary1 +employee.emp_salary;
}); 
const average1 = sumSalary1 /itDeptAverage.length;
console.log(`  6} Average salary of the "IT" employee => ${average1}`);   
console.log("______________________________________________________________________");
