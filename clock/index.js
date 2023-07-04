let a;
let date;
let time;
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById("ti").innerHTML= time + "<br>" + date;
    
}, 1000);