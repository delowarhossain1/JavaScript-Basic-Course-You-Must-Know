const obj = {
    name : 'Raju',
    roll : 10,
    sub : ['Bangla', "English", "Math"],

}

// console.log(obj.name);
// console.log(obj.roll);
// console.log(obj.sub);

const {name, sub} = obj;

console.log(name)
console.log(sub);


const arr = ["Bangla", "English", "Math", "Physic"];

const [,eng,, ph] = arr;

console.log(eng);
console.log(ph)

