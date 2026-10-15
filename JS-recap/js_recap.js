// in js, any variable gets its data type auto according to the assignment. 
//---------------------------------------------------------------------------------------------------------------------
// null vs undefined and why undefined happens
// in terms of undefined, we if we dont declare a variable or we dont set value to a variable or we dont return anything from a function ,we are accessing something which doesnt even exist, then it is called undefined.

// null is a object. it is a historical bug from the creators.
// the difference between null and undefined is, we can say which is null or what is null, but undefined is something which is naturally done. if we declare something as null, then it will be null, and it will be an object.

//--------------------------------------------------------------------------------------


// block scope
let pi=3.14;
add(2,5);
function add(a,b){
    const factor=0.5;
    const result=(a+b)*factor;
    const total = doubleIt(result);
    return total;
}
function doubleIt(num){
    return num*2;
}
add(5,10);
// we cannot access factor from the outside here. as it was declared in the function. and it is out of the brackets. means it is in the scope.
// console.log(factor);

