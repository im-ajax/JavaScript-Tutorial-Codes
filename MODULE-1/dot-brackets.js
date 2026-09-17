const employee={
    name:'john Dee',
    1: 'Desk One',
    'home-address': '123 Main St.',
    salary:5000,
    position: 'Software Engineer'
};
console.log(employee.name);
console.log(employee['name']);
//which ever variables are not easily accessible, can be easily done ny this bracket notation with it.
console.log(employee['home-address']);

const salary=employee.salary;
const money=employee['salary'];
const key='position';;
console.log(employee[key]);
// lastly when we have to use them 
//when the property is a number
// the property name has a special character
// the property name is assigned to a variable and you want to access the property value by this variable.
