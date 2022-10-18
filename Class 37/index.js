const obj = {

    person : {
        name : "Raju",
        address : "Dhaka",
        mobile : '0101010101'
    }
}

const arr = [
    function add(a, b){
        return a + b;
    }
]


const func = ({person}) =>{
    const {name, address, mobile} = person;

}

func(obj);

function func2([addFun]){

    console.log(addFun(10, 5))
}

func2(arr)
