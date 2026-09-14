const employee={
    name:'john Dee',
    1: 'Desk One',
    'home-address': '123 Main St.',
    salary:5000,
    family:{
        father:'Richard Doe',
        mother:{
            name:'jane Doe',
            age:55,
        }
    },
    position: 'Software Engineer'
};
// const value=employee.name;
// console.log(employee.family.mother.age);

// if we find an element which doesnt even exists, It will throw an error. instead we can do this work.

console.log(employee.family?.mother?.name)