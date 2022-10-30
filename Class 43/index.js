

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        user(res)
    });


function user(userInfo){
    const root = document.getElementById('root');
    let userInfoCode = '';

    userInfo.forEach(value => {
        userInfoCode += htmlCode(value)
    });

    root.innerHTML = userInfoCode;
}

function htmlCode(userInfo){
    const {email, name, website} = userInfo;

    const html = ` 
        <div class='user'>
            <p>Name : ${name}</p>
            <p>Email : ${email}</p>
            <p>Website : ${website}</p>
        </div>
    `;

    return html;
}