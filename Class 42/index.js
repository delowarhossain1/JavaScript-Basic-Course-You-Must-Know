fetch('product.json')
    .then(res => res.json())
    .then(res => {

        productCard(res)
    });


function productCard(productInfo) {
    const root = document.getElementById('root');

    productInfo.forEach(value => {
        
        root.innerHTML += htmlCode(value);
    });


    function htmlCode(info) {
        const {imageURL, productName, price} = info;

        const html = `
            <div>
                <img src='${imageURL}' />
                <h3>${price}</h3>
                <h2>${productName} </h2>

            </div>
        `;

        return html;
    }
}
