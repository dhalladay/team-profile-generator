//validation
const inquirer = require("inquirer");
const Employee = require("./Employee");

//extended from Employee
//officeNumber
//getRole() overridden to return manager

class Manager extends Employee {
  constructor(name = '') {
    super();
    this.officeNum = officeNum
  }

  getOfficeNumber() {
    return `${this.officeNum}`
  }


}
