export default function createIteratorObject(report) {
  // Define a generator function to iterate over all employees
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenerator();
}
