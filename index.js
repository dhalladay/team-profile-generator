//require node packages
const inquirer = require('inquirer');
const fs = require('fs');

//require constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//declare array for team creation
function CreateTeam() {
  this.team = [];
  this.employee;
}

CreateTeam.prototype.newMember = function () {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is the employee's name?`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`You must enter the employee's name.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the employee's employee ID?`,
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log(`You must enter employee's ID.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the employee's email address?`,
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log(`You must enter the employee's email address.`);
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
      }])

    .then(({ name, id, email, role }) => {    
    this.roleBasedQuestions(name, id, email, role)
    })
};

CreateTeam.prototype.roleBasedQuestions = function (name, id, email, role) {
  if (role === 'Manager') {
    this.managerQuestions(name, id, email, role);
  }
  else if (role === 'Engineer') {
    this.engineerQuestions(name, id, email, role);
  }
  else if (role === 'Intern') {
    this.internQuestions(name, id, email, role);
  }
}

CreateTeam.prototype.managerQuestions = function (name, id, email, role) {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'officeNum',
      message: `What is the office number?`,
      validate: officeNumInput => {
        if (officeNumInput) {
          return true;
        } else {
          console.log(`You must enter the office number`);
          return false;
        }
      }
    }])
    .then(({ officeNum }) => {
      console.log(name, id, email, role, officeNum)
      this.team.push(new Manager (name, id, email, role, officeNum))
      console.log(this.team);
      this.addAnotherEmployee()
    })
}

CreateTeam.prototype.engineerQuestions = function (name, id, email, role) {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'gitHub',
      message: `What is their GitHub username?`,
      validate: gitHubInput => {
        if (gitHubInput) {
          return true;
        } else {
          console.log(`You must enter the github username`);
          return false;
        }
      }
    }])
    .then(({ gitHub }) => {
      console.log(name, id, email, role, gitHub)
      this.team.push(new Engineer (name, id, email, role, gitHub))
      console.log(this.team);
      this.addAnotherEmployee()
    })
}

CreateTeam.prototype.internQuestions = function (name, id, email, role) {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'school',
      message: `What school did they go to?`,
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log(`You must enter the school`);
          return false;
        }
      }
    }])
    .then(({ school }) => {
      console.log(name, id, email, role, school)
      this.team.push(new Intern (name, id, email, role, school))
      console.log(this.team);
      this.addAnotherEmployee()
    })
}

// ask if they want to add another employee if true prompt newMember, otherwise close
CreateTeam.prototype.addAnotherEmployee = function (name, id, email, role) {
  inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'addAnother',
      message: `Would you like to add another employee?`
    }])
    .then(({ addAnother }) => {
      if (addAnother) {
        this.newMember()
      }
      else {
        console.log('End')
        return
      }
    })
}

new CreateTeam()
  .newMember()

