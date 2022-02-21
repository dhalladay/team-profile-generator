const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
  const employee = new Employee('Dave', 4, 'test@email.com', 'Manager');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(4);
  expect(employee.email).toBe('test@email.com')
  expect(employee.role).toBe('Manager');
});

test('getName() returns html with ${name} value', () => {
  const employee = new Employee('Dave', 4, 'test@email.com', 'Manager');

  expect(employee.getName()).toEqual(expect.stringContaining('Dave'));
})

test('getId() returns html with id value', () => {
  const employee = new Employee('Dave', 4, 'test@email.com', 'Manager');
  
  expect(employee.getId()).toEqual(expect.stringContaining('4'));
})

test('getEmail() returns html with email value', () => {
  const employee = new Employee('Dave', 4, 'test@email.com', 'Manager');
  
  expect(employee.getEmail()).toEqual(expect.stringContaining('test@email.com'));
})

test('getName() returns html with ${name} value', () => {
  const employee = new Employee('Dave', 4, 'test@email.com', 'Manager');

  expect(employee.getRole()).toEqual(expect.stringContaining('Manager'));
})
