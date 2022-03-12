class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  // const questions = [
  //   {
  //     type: 'input',
  //     name: 'name',
  //     message: `What is the employee's name?`,
  //     validate: nameInput => {
  //       if (nameInput) {
  //         return true;
  //       } else {
  //         console.log(`You must enter the employee's name.`);
  //         return false;
  //       }
  //     }
  //   },
  //   {
  //     type: 'input',
  //     name: 'id',
  //     message: `What is the employee's employee ID?`,
  //     validate: idInput => {
  //       if (idInput) {
  //         return true;
  //       } else {
  //         console.log(`You must enter employee's ID.`);
  //         return false;
  //       }
  //     }
  //   },
  //   {
  //     type: 'input',
  //     name: 'email',
  //     message: `What is the employee's email address?`,
  //     validate: emailInput => {
  //       if (emailInput) {
  //         return true;
  //       } else {
  //         console.log(`You must enter the employee's email address.`);
  //         return false;
  //       }
  //     }
  //   },
  //   {
  //       type: 'list',
  //       name: 'role',
  //       message: "What is the employee's role?",
  //       choices: ['Manager', 'Engineer', 'Intern']
  //   }]


  getName() {
    return `${this.name}`
  }

  getId() {
    return `${this.id}`
  }

  getEmail() {
    return `<a href="mailto:${this.email}">${this.email}</a>`
  }

  getRole() {
    return `${this.role}`;
  }

}

module.exports = Employee;

//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole()
//returns 'Employee'