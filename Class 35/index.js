function fun1(){
    console.log('hello');
}
fun1()

const fun2 = () => console.log('hello')
fun2()


function fun3(name){
    console.log('My name is '+ name);
}
fun3('Raju')


const fun4 = name => console.log('My name is '+ name);
fun4('Raju')


function fun5(num1 , num2){
    return num1 + num2;
}
console.log(fun5(10, 5))


const fun6 = (num1, num2) =>  num1 + num2;
console.log(fun6(10, 5))



function fun7(num1, num2, num3){
    const sum = num1 + num2;
    const divide = sum / num3;

    return divide;
}

const fun8 = (num1, num2, num3) => {
    const sum = num1 + num2;
    const divide = sum / num3;

    return divide;
}

// const fun10 = num => console.log('hello', num)

// fun10(10)

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    alert('ok')
})

btn.addEventListener('click', ()=> alert('ok'))


// const fun = () => {

// }