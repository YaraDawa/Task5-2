let closes = document.querySelector('#x');
let black = document.querySelector('.sentance');
let items = document.querySelector('.item')
let scrolls = document.querySelector('.scroll .child');
let cards = document.querySelectorAll('.perfiction .card');
let icon = document.querySelectorAll('.perfiction .card i');
console.log(icon);



function country_code(){
    var val=document.getElementById("country").value;

    if (val==="select country") {
        document.getElementById("output").value="";
    
}
else if (val==="us") {
    document.getElementById("output").value="+1";
}
else if (val==="uk") {
    document.getElementById("output").value="+44";
}
else if (val==="br") {
    document.getElementById("output").value="+55";
}
}
