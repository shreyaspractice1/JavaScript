SBIbank = {
  bankName: "SBI",
  location: "Hinjewadi Main Branch",
  accountNo: "074918210002455",
  ifscCode: "SBI000015",
  interestRate: "8.31 %",
  showDetails: function () {
    console.log(
      ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
    );
  },
};
SBIbank.showDetails();

Axisbank = {
  bankName: "Axis",
  location: "Sangola Main Branch",
  accountNo: "054788548752455",
  ifscCode: "AXIS00215",
  interestRate: "6.96 %",
  showDetails: function () {
    console.log(
      ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
    );
  },
};
Axisbank.showDetails();

HDFCbank = {
  bankName: "HDFC",
  location: "Pune Station Branch",
  accountNo: "001254210002455",
  ifscCode: "HDFC00892",
  interestRate: "5.81 %",
  showDetails: function () {
    console.log(
      ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
    );
  },
};
HDFCbank.showDetails();

YesBank = {
  bankName: "Yes Bank",
  location: "Marine Lines Main Branch",
  accountNo: "025452100052455",
  ifscCode: "YES000521",
  interestRate: "9.31 %",
  showDetails: function () {
    console.table(
      ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
    );
  },
};
YesBank.showDetails();
console.table([SBIbank, Axisbank, HDFCbank, YesBank]);
