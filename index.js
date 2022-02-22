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
          console.log('role', name, id, email, role);
          if (role === 'Manager') {
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
                console.log('officenumber', officeNum)
                return officeNum
              })
          }
          console.log('manager', name, id, email, role, officeNum)
        })
};

CreateTeam.prototype.roleBasedQuestions = function (data, role) {
  if (role === 'Manager') {
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
  }
}

new CreateTeam()
  .newMember()