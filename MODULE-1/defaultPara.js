// default params

function add(num1,num2){
    const total = num1+num2;
    console.log(num1,num2,total);
}
function add(num1,num2=0){
    const total = num1+num2;
    console.log(num1,num2,total);
}
function fullName(first,last='Islam'){
    const name=first+ ' ' +last;
    console.log(name);
}
fullName('Kamruzzaman');

