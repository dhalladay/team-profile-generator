const Employee = require("./Employee");

class Engineer extends Employee {
  
  constructor(name = '', id = '', email = '', role = '', gitHubUser = '') {
    super(name, id, email, role)
    this.gitHubUser = gitHubUser
  }
  
  getGitHubUser() {
    return `${this.gitHubUser}`
  }


}

module.exports = Engineer;
