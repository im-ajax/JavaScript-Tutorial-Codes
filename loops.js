const numbers=[1,2,3,4,5];
// for(const number of numbers ){
//     console.log(number);
// }
const employee={
    name:'John Doe',
    salary:5000,
    position:'software Engineer'
};
for(const key in employee){
    console.log(key);
    const value=employee[key];
    console.log(key,value);
}

// we will be using for of for arrays and string and for...in
// for object traversal methods.