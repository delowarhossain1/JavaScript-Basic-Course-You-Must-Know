const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const obj = {
    name : "Raju",
    mobile : '0167000000',
    address : "Saver, dhaka",
    role : 'Admin'
};

// console.log(obj.name);
// console.log(obj['name'])

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

for(let value of arr){
    console.log(value)
}

for(let key in obj){
    console.log(key +' : ' + obj[key])
}
