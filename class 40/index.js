const product = [
    {
        id: 1,
        productName: 'Com fortable Denim Shirt for Men - Blue',
        imageURL: 'https://static-01.daraz.com.bd/p/858ad965067922e0673b718d11e27f7e.jpg',
        price: 120,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque laborum quas voluptates iusto expedita et corporis',
    },
    {
        id: 2,
        productName: 'New White Shirt Men s Stylish & Fashionable Trendy Good Looking Long Sleeve Formal Shirt',
        imageURL: 'https://static-01.daraz.com.bd/p/8045dce7b7ca5a4fb78162ca96f29dc0.jpg_400x400q75-product.jpg_.webp',
        price: 200,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque laborum quas voluptates iusto expedita et corporis phone',
    },
    {
        id: 3,
        productName: 'Samsung Galaxy A04s (4GB/128GB) - 5000mAh Battery Samsung Galaxy A04s (4GB/128GB) - 5000mAh Battery phone',
        imageURL: 'https://static-01.daraz.com.bd/p/5433521cd491d78f32a8627cf3689002.jpg',
        price: 10000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque laborum quas voluptates iusto expedita et corporis',
    },
    {
        id: 4,
        productName: 'For Xiaomi Redmi Note 11 4g Back Camera Lens Protector - Transparent (Not Glass) phone',
        imageURL: 'https://static-01.daraz.com.bd/p/5ce5e89de39a7c5da400e49b27ddef6a.jpg',
        price: 100,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque laborum quas voluptates iusto expedita et corporis',
    }

];

const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchBoxValue = e.target.searchBox.value;
    const searchText = searchBoxValue.toLowerCase();
   
    const searchedResult = product.filter((value)=> {
        const productTitle = value.productName;
        const title = productTitle.toLowerCase();

        return title.includes(searchText);
    });

    const rootDiv = document.getElementById('root');
    let htmlCode = '';

    searchedResult.forEach(value => {
        const code = productCard(value);

       return htmlCode +=  code;       
    });

    rootDiv.innerHTML = htmlCode;
});


function productCard(info){
    const {productName, imageURL, price, description} = info;

    const html = `
    <div class="product">
        <img src="${imageURL}" alt="">

        <h2>$${price}</h2>
        <h4>${productName}</h4>
        <p>${description}</p>
    </div>
    `;

    return html;
}