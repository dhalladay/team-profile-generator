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

CreateTeam.prototype.startPrompt = function() {

  return inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log("You must enter the manager's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?",
      validate: managerIdInput => {
        if (managerIdInput) {
          return true;
        } else {
          console.log("You must enter the manager's ID.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
      validate: managerEmailInput => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("You must enter the manager's ID.");
          return false;
        }
      }
    },
  ])
};

new CreateTeam()
  .startPrompt()
  .then(data => {
    console.log(data)
  });