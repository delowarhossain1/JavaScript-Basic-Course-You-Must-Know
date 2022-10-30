fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => printCountries(res))


function printCountries(countries){
    const root = document.querySelector('#root');
    let htmlCode = '';

    countries.forEach(country =>{
        htmlCode += makeHTML(country);
   
    });

    root.innerHTML = htmlCode;
}


function makeHTML(country){
    const {name, flags } = country;

    const html = `
        <div>
            <img src='${flags.png}' />
            <h3>${name.common}</h3>
        </div>
    `;

    return html;
}

const from = document.getElementById('form');

from.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = e.target.searchBox.value;
    const searchText = text.toLowerCase();


    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
    .then(res => res.json())
    .then(res => printCountries(res))
   
});