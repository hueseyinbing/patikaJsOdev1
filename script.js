let myName = prompt("Adınız nedir?");

let name = document.getElementById("myName").innerHTML = myName;

let clock = document.getElementById("myClock").innerHTML = showTime();

let myVar = setInterval(function() {
    showTime();
}, 1000);
  
  function showTime() {
    let weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("myClock").innerHTML = 'Saat şu an ' + d.toLocaleTimeString() + ' ve günlerden ' + day + '.'; 
};