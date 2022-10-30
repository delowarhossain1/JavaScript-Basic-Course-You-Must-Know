// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(res => console.log(res))
import productCard from './productCard.js';

async function loadApi(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    let productCode = '';

    for(let value of data){
        productCode += productCard(value);
    }

    document.getElementById('root').innerHTML = productCode;
    
}

loadApi()

const title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae.';

const rest = title.length > 30  ? title.slice(0, 15) + '...' : title;

console.log(rest)   

// condition ? flkfkkd : lalalkdfkdk;

console.log(title.slice(0, 15) + '...')

