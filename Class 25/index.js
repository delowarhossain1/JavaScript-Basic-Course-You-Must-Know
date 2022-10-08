var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    // var fName = event.target.fName.value;
    var lName = event.target.lName.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    var country = event.target.country.value;
    var address = event.target.address.value;


   var info = {
        fName,
        lName,
        email,
        password,
        country,
        address,
   }

   console.log(info)
    
})
