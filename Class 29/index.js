var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');


setInterval(function () {

    var date = new Date();
    var s = date.getSeconds();
    var m = date.getMinutes();
    var h = date.getHours();

    seconds.innerText = s;
    minutes.innerText = m;
    hours.innerText = h;

}, 1000);
