professor = {
  Name: "Shreyas Deshpande",
  Subject: "Angular",
  Designation: "Technical Lead",
  Compony: "Pesistant Systems",
  isOnsite: true,
  degrees: {
    engineering: "CSE",
    masters: "Computing Operations",
    Phd: "Adv Computing",
  },
  certificates: [
    "Hacker Rank Particiation",
    "Certificate in IFE Course",
    "Certificate in Adv programming",
  ],

  getTotalDegrees: function () {
    console.log("  Before");

    let before = Object.values(professor.degrees);

    console.log(before);
    console.log("  After");

    let addValue = (professor.degrees.Hsc = "Science");

    let after = Object.values(professor.degrees);

    return after;
  },
};

console.log(
  "____________________________________________________________________________________________________________________________________________________________________________________________________"
);
console.log(` 1} (Properties of professor are) => `);
console.log(professor);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(` 2} `);
console.table(professor.degrees);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  ` 3} (Adding one array in given object) => ${professor.certificates}`
);
// console.log(professor.certificates);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(` 4} (After concating all degree in step 2) => `);

console.log(professor.getTotalDegrees());

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  ` 5} (Adding new property) => Total experience is "${(professor.Experience =
    "14 years")}"`
);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  ` 6} (Modifing "Designation property) => Designation is "${(professor.Designation =
    "Scrum Master")}"`
);
console.log(professor);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  ` 7} (Adding new certificate) ${professor.certificates.push(
    "Oracle Certified"
  )}`
);
console.table([professor]);
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------"
);
console.log(
  ` 8} (Logging last element of the certificate) => "${
    professor.certificates[professor.certificates.length - 1]
  }"`
);
console.log(
  "_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________"
);
