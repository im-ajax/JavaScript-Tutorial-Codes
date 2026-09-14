const king={
    name:'mufasa',
    age:55,
    kingdom:'pride lands'
};
// using freeze will work like we wont be able to update, delete or modify the array.
Object.freeze(king);

// cannot add or delete. we can just modify the existing object.
object.seal(king);

// keys provides the variable names in object
const keys=Object.keys(king);
console.log(keys);
// it provides the values in an object
const values=Object.values(king);
console.log(values);
// it provides the entries. in the object
const entries=Object.entries(king);
console.log(entries);

// if we want to delete the values then. 
delete king.age;
// adding a new variable
king.queen='sarabi';
king.name='king simba';
console.log(king);