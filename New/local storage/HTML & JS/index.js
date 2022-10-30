

const obj = {
    name : "Mr. x",
    address : 'xyz'
}

localStorage.setItem('user', JSON.stringify(obj));

const userInfo = localStorage.getItem('user');

console.log(JSON.parse(userInfo));



