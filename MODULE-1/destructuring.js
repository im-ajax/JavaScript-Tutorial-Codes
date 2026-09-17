// const product={
//     name:'iphone',
//     price: 799,
//     description:'a smartphone by apple'
// };
// const newPrice=product.price+100;
// const phoneName=`this is ${product.name}`;

// const price=product.price;
// const name=product.name;


// const product={
//     name:'iphone',
//     price: 799,
//     description: 'apple'
// };
// const {name,price,description}={
//     name:'iphone',
//     price: 799,
//     description: 'apple'
// };
// console.log(name,price,description);
// if we have same name above it, then use this method

// const {name,price:productPrice,description}={
//     name:'Iphone',
//     price:799,
//     description:'apple'
// };
// console.log(productPrice);


// what if we dont have the same data.
const {name,price:productPrice,description, camera='20megaPixels'}={
    name:'Iphone',
    price:799,
    description:'apple'
};
console.log(productPrice,camera);

// in terms of arrays
const [first,second]=[1,2,3,4,5];
console.log(first,second);