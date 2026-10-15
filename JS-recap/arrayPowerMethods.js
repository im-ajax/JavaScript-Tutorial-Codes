// const numbers =[1,2,3,4,5];
// const doubled =[];
// for(const num of numbers){
//     doubled.push(num*2);
// }
// console.log(doubled);
// const doubleIt=num=>num*2;
// const doubled = numbers.map(doubleIt);
// const squared = numbers.map(num=>num*num);
// const friends= ['zaved','naved','Khaled','sayed',];
// const firstLetters=friends.map()
const products=[
    {name: 'laptop',price:45000},
    {name: 'phone',price:15000},
    {name: 'tablet',price:25000}
];
const prices=products.map(pd=>pd.price*2);
const names=products.map((pd,index,productsArray)=>{
    const uppercase=pd.name.toUpperCase();
    // console.log(index,uppercase,productsArray);
    return uppercase;
})
const result = products.forEach(pd=>console.log(pd.name));
// console.log(names);