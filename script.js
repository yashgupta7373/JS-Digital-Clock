var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = "0px"
}
function hideMenu(){
    navLinks.style.top = "-300px"
}
// var country = document.getElementById("country");
function country(){
    document.getElementById('country').innerHTML = 'India'
}
let time = document.getElementById("time");
let date = document.getElementById("date");
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit"});
    document.getElementById('date').innerHTML = date;
    date.innerHTML = currentTime.toLocaleDateString(undefined, options);
    // hrs.innerHTML = (currentTime.getHours()<10?'0':'')+currentTime.getHours();
    // min.innerHTML = (currentTime.getMinutes()<10?'0':'')+currentTime.getMinutes();
    // sec.innerHTML = (currentTime.getSeconds()<10?'0':'')+currentTime.getSeconds();
    // date = currentTime.toLocaleDateString(undefined, Options);
},1000)

