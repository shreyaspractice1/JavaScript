class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 50000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const array_employee = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];

  console.log("------------------------------------------------------------------------------------------------------------------");
  console.log(`  1} Findout "TCS" employee details and log only name and company => `);
    
        array_employee.forEach((employee) => { 
        if (employee.emp_company == "TCS") {
            console.log(` Name: ${employee.emp_name}     and the    Company: ${employee.emp_company}`);
        }
    });
    console.log("------------------------------------------------------------------------------------------------------------------");
    console.log(`  2} Employee's with salary greater than or equal to "50000" and log all the employee details => `);
    console.log(" ");
    array_employee.forEach((employee) => {
        if (employee.emp_salary >= 50000) {
            console.log(employee);
        }
    })
    console.log("------------------------------------------------------------------------------------------------------------------");
    let salarySum = 0;
    array_employee.forEach((employee) => {
          salarySum += employee.emp_salary
      })
      
    
    console.log(`  3} Sum of all Employee salary => ${salarySum} `);
    console.log("------------------------------------------------------------------------------------------------------------------");

    console.log(`  4} Avarage salary of the Employee is  => ${salarySum/array_employee.length} `);

    console.log("------------------------------------------------------------------------------------------------------------------");
    console.log(`  5} Employee's which working in "IT" or "HR" with salary greater than or equal to "75000" and log all the employee details => `);
    console.log(" ");

      array_employee.forEach((employee) => {
        if ((employee.emp_dept == "IT" || employee.emp_dept == "HR") && employee.emp_salary >= 75000 ) {
          console.log(employee);
        }
      })
      console.log("------------------------------------------------------------------------------------------------------------------");