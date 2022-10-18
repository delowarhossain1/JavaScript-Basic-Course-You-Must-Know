const numbers = [20, 30, 40, 50];


// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

const method1 = numbers.forEach((value, index, arr)=> {
    return value + 5;
});

console.log(method1)

const method2 = numbers.map((value, index, arr)=>{
    return value + 5;
    
})

console.log(method2)

