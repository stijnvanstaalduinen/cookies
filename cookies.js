function showcookieWall(){
    document.getElementById('cookieWall').style.display = 'block';
    document.getElementById('overheen').style.display = 'block';}

    function checkAge(){
var age = document.getElementById('ageInput').value;

if (age >= 18){
   window.location.href = 'https://tweedekamer2023.stemwijzer.nl/#/';
} else {
    document.getElementById('cookieWall').style.display = 'none';
    document.getElementById('overheen').style.display = 'none';
    document.getElementById('red-Page').style.display = 'block';} }