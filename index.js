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
}

CreateTeam.prototype.addMember = function(role) {
  inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: `What is the ${role}'s name?`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`You must enter the ${role}'s name.`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the ${role}'s employee ID?`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log(`You must enter ${role}'s ID.`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the ${role}'s email address?`,
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log(`You must enter the ${role}'s email address.`);
          return false;
        }
      }
    },
  ])
  .then((data, role))
};

CreateTeam.prototype.roleBasedQuestions = function(data, role) {
  if (role === 'Manager') {
    inquirer
      .prompt ([
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
  .addMember('Manager')