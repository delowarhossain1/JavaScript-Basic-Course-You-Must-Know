
// product
function product(info){

    var htmlCode = `
    <div class="product">
        <img src="${info.productURL}" alt="">

        <h3>${info.title}</h3>

        <p>${info.des}</p>

        <a href="${info.detailsURL}" target="_blank">
            <button>Details</button>
        </a>
    </div>
    `;

    return htmlCode;
}


var form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var title = e.target.title.value;
    var productURL = e.target.productURL.value;
    var detailsURL = e.target.productDetailsURL.value;
    var des = e.target.des.value;

    var productInfo = {
        title,
        productURL,
        detailsURL,
        des
    }

    var code = product(productInfo);
    var root = document.getElementById('root');

    root.innerHTML += code;

})

// var obj = {
//     name : 'Raju'
// }

// console.log(obj.name)

// Product img
// https://static-01.daraz.com.bd/p/be39991f3228f1563761b5fe52927ce9.jpg
// https://static-01.daraz.com.bd/p/9e9267b05a5eff897b9a4b5ce53bd710.jpg
// https://static-01.daraz.com.bd/p/5befd51060f56e996b17204153f79e41.jpg
