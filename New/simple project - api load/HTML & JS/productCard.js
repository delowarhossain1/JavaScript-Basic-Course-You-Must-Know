const productCard = (product) => {
    const { image, price, title, description } = product;

    // console.log(title.length > 20 ? title.slice(0, 20) + '...' : title)

    return (
        `
        <div class='product'>
            <img src='${image}' />
            <h1>${price}</h1>
            <h2>${title.length > 20 ? title.slice(0, 20) + '...' : title}</h2>
            <p>${description}</p>
        </div>
    `
    );

}

export default productCard;