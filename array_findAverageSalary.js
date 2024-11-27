// 10.You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.
// input:- const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];
// output:- [
//   { department: 'HR', average: 71666 }
// ]	
const employees = [
      { name: "John", salary: 50000, department: "IT" },
      { name: "Jane", salary: 60000, department: "HR" },
      { name: "Bob", salary: 55000, department: "IT" },
      { name: "Sophie", salary: 75000, department: "HR" },
      { name: "Mike", salary: 65000, department: "IT" },
      { name: "Emily", salary: 80000, department: "HR" },
      { name: "David", salary: 70000, department: "IT" },
    ];

    //[{ name: "John", salary: 50000, department: "IT" },{ name: "Bob", salary: 55000, department: "IT" },]
let newArr = [...new Set(employees.map(i => i.department))];//make uniq array of department
// console.log(newArr);

let result = newArr.map(dep => //it take elments of uniq array one by one [ 'IT', 'HR' ]
{
    const groupingDep = employees.filter(obj => obj.department === dep);//carete a new obj of array in which it will make diffrenet obj with same departments in array
    const totalSalary = groupingDep.reduce((sum, dep) => sum + dep.salary, 0);//for total salaray according to diffrent dep.
    const averageSalary = totalSalary / groupingDep.length;//find average
    return{dep,average:averageSalary};
}).filter(item => item.average > 65000);//to filter that salaray average is greter than 65000

console.log(result);
// console.log(newArr);
