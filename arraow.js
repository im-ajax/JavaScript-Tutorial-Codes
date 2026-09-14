//function declaration

console.log(add(10,20));
//we can call this as we have no calling problems here. so it will work even if we call it before the function.
function add (num1,num2){
    return num1+num2;
}

//function expression 
// console.log(add2(20,30));
// we cannot call this function as it cannot be called before it is created.
const add2=function(num1,num2){
    return num1+num2;
};


//arrow function
const add3=(num1,num2) => num1+num2;
console.log(add3(50,60));

// while using event listener
document.getElementById('btn').addEventListener('click',(event)=>{
    
})