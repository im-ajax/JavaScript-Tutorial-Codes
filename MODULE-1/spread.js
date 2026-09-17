const max=Math.max(3,5,6,7,2);
console.log(max);
const numbers=[3,4,5,6,7,7,4,2,1];
const max2=Math.max(...numbers);
// console.log(numbers);


const params=[45,12,3];
function sum(x,y,z){
    return x+y+z;
}
const result=sum(...params);
console.log(result);
const person={
    name: 'alice',
    age: 30
}
//here the person2 destination is same as person.
// const person2=person;
// but here, it wont be same like this.
const person2={...person};
person.salary=3800;
console.log(person);
console.log(person2);