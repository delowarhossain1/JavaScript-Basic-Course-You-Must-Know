var display = document.getElementById('display');
var btns = document.querySelectorAll('.btns button');

for(var i = 0; i < btns.length; i++){
    var btn = btns[i];

   btn.addEventListener('click', function(e){
    var text = e.target.innerText;

    if(text === '='){
        var result = eval(display.value);

        display.value = result;
        
    }
    else if(text === 'AC'){
        display.value = '';
    }
    else{
        // display.value = display.value + text;
        display.value += text;
        
    }


   });
}
