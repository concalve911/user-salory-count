"use strict";

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    wep: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalCount(company) {
  let totalSalary = 0;

  for (let key in company) {
    let value = company[key];
    if (Array.isArray(value)) {
      for (let employee of value) {
        totalSalary += employee.salary;
      }
    } else if (typeof value === "object" && value !== null) {
      totalSalary += totalCount(value);
    }
  }

  return totalSalary;
}

console.log(totalCount(company));
