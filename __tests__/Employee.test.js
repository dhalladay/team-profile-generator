const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
  const employee = new Employee('Dave', 4, 'test@email.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(4);
  expect(employee.email).toBe('test@email.com')
});

test('getName() returns html with ${name} value', () => {
  const employee = new Employee('Dave', 4, 'test@email.com');

  expect(employee.getName()).toEqual(expect.stringContaining())
})