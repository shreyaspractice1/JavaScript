console.log("=================================================== $ Vehicle Class $ ===================================================");
class Vehicle {
  constructor(brand, fuelType, vehicleType, mileage) {
    this.brand = brand;
    this.fuelType = fuelType;
    this.vehicleType = vehicleType;
    this.mileage = mileage;
  }
  showFunction() {
      console.log(" ");
    console.log   (
      ` Details is == # Brand => ${this.brand},   # Fuel Type => ${this.fuelType},   # Vehicle Types => ${this.vehicleType},    # Mileage => ${this.mileage}, `
    );
  }
}

const Audy_Q3 = new Vehicle("Audy", "Petrol", "Sedan", 15);
const Cambry = new Vehicle("Toyota", "Deisel", "Sedan", 10);
const Pajero = new Vehicle("Mitsubishi", "Diesel", "MPV", 15);
const Thar = new Vehicle("Mahindra", "Diesel", "SuV", 15);
const Safari = new Vehicle("Tata", "Petrol", "Sedan", 15);

const array = [Audy_Q3, Cambry, Pajero, Thar, Safari];

for (const element of array) {
  element.showFunction();
}
console.log(" ");
console.log("=================================================== $ College Class $ ===================================================");
console.log(" ");
class College {
    constructor(name,standard, dept,yearOfPassing,city){
        this.name = name;
        this.standard = standard;
        this.dept = dept;
        this.yearOfPassing = yearOfPassing;
        this.city = city;
      
    }
    traverseObject(){
        console.log(` Details of College is => ${this.name}, ${this.standard}, ${this.dept}, ${this.yearOfPassing}, ${this.city}, `);
    }
}

const UtkarshPrathmikVidyalaya = new College("Utkarsh Prathmik Vidyalay","4 th", "Science", 2002, "Sangola");
const SangolaVidyaMandirSangola = new College("SVM Jr. College","12 th", "Science", 2014, "Sangola");
const FabtechTechnicalCampus = new College("Fabtech Technical Campus","Bachlor of Engg.", "MECHANICAL", 2018, "Sangola");
const BITsPilaniTechnology = new College("BIT's Pilani Technology","Master's of Engg.", "Automobile Tech", 2020, "Hyderabad");



traverseObject(UtkarshPrathmikVidyalaya);
console.log("---------------------------------------");
traverseObject(SangolaVidyaMandirSangola);
console.log("---------------------------------------");
traverseObject(FabtechTechnicalCampus);
console.log("---------------------------------------");
traverseObject(BITsPilaniTechnology);

function traverseObject(clgName) {
  
  for (const key in clgName) {
    if (clgName.hasOwnProperty.call(clgName, key)) {
        const element = clgName[key];
        console.log(`${key} :: "${element}"`);
    }
}
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// class College {
//   constructor(name ,department,city,pincode){
//    this.name = name;
//    this.department= department;
//    this.city= city;
//    this.pincode = pincode;
//   }
//   traverse(){

//       console.log(`  Details is : ${this.name},${this.department},${this.city},${this.pincode}`);
//   }
// }
// const Sinhgad = new College("Sinhgad College","Computer Engg","Pandharpur",413304);
// const SVERI = new College("SVERI'S College","Mechanical Engg","Pandharpur",413304);
// const Febtech = new College("Febtech College","Electric Engg","Sangola",413304);
// const DY =new College("D Y Patil","Civil Engg","Pune",411018);

// traverse(Sinhgad);
// console.log(`-------------------------------------------------------------------------------`);
// traverse(SVERI);
// console.log(`-------------------------------------------------------------------------------`);
// traverse(Febtech);
// console.log(`-------------------------------------------------------------------------------`);
// traverse(DY);


// function traverse(sinhgad){

//   for (const key in sinhgad) {
//       if (sinhgad.hasOwnProperty.call(sinhgad, key)) {
//           const element = sinhgad[key];
//           console.log(`${key},${element}`);
//       }
//   }
// }