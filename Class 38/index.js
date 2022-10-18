/*
    String Methods
    1. toUpperCase()
    2. toLocaleLowerCase()
    3. includes();
    4. slice
*/ 

const productTitle = 'White T-shirt / Cotton Round Neck T-Shirt for Men / Half sleeve T-Shirt F';

// console.log(productTitle.toUpperCase());
// console.log(productTitle.toLocaleLowerCase());

const pTitleLow = productTitle.toLocaleLowerCase();
const search = 't-shirt';
// console.log(pTitleLow.includes(search));

console.log(productTitle.slice(0, 50) + '....');
