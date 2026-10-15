// filter.js 

// const numbers=[1,2,3,4,5];
// const evenNumbers=numbers.filter(num=>num%2===0)
// // console.log(evenNumbers)
// const friends=['zaved','naved','sajed','nahid','nasib'];
// const Nfriends=friends.filter(frd=>frd[0]==='n');
// console.log(Nfriends);

// const students=[
//     {name:'tormij',age:32},
//     {name:'zaved',age:31},
//     {name:'naved',age:23},
//     {name:'khaled',age:20},
//     {name:'sajed',age:34},
//     {name:'nahid',age:22},
//     {name:'nasib',age:41}
// ];
// const olderStudents=students.filter(std=>std.age>30);
// console.log(olderStudents);



// find.js : work of find function in js 
// const students=[
//     {name:'tormij',age:32},
//     {name:'zaved',age:31},
//     {name:'naved',age:23},
//     {name:'khaled',age:20},
//     {name:'sajed',age:34},
//     {name:'nahid',age:22},
//     {name:'nasib',age:41}
// ];
// const student=students.find(std=>std.name==='khaled');
// console.log(student);


// work of reduce
const numbers=[1,2,3,4,5,6];
// here we can take any two parameters just to store and to do. thats is.
const total=numbers.reduce((acc,num)=>acc+num,0);
console.log(total);