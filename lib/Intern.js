const Employee = require("./Employee");

class Intern extends Employee {
  // change officeNum to intern specific question
  constructor(name = '', id = '', email = '', role = '', school = '') {
    super(name, id, email, role)
    // change officeNum to intern specific question
    this.school = school
  }
  
  getSchool() {
    // change officeNum to intern specific question
    return `${this.school}`
  }


}

module.exports = Intern;
