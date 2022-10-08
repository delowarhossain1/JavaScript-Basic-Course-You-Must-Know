var url = 'https://static-01.daraz.com.bd/p/5befd51060f56e996b17204153f79e41.jpg';

var title = 'Simple product';

var des = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eos.';


var product = `
    <div class='product'>
        <img src='${url}' />
        
        <h2>${title}</h2>
        <p>${des}</p>
    </div>
`;

document.getElementById('root').innerHTML = product;