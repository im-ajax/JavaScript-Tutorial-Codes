// function outerFunction(){
//     function innerFunction(){
//         console.log('this is the inner function');
//     }
//     return innerFunction;
// }
// const output=outerFunction(); 
// function counter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log('value of count',count);
//     }
//     return increment;
// }
// const count1=counter();


// function counter() {

//     let count = 0;

//     return function() {
//         count++;
//         console.log(count);
//     };
// }

// let myCounter = counter();
// myCounter();
// myCounter();
// myCounter();


function hello(){
    console.log("Hello");
}
function run(callback){
    callback();
}
run(hello);
