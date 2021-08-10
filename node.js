let username = prompt("Kullanıcı adınızı giriniz:")
let info = document.querySelector("#info")
info.innerHTML = `${username}`
function startTime(){
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let d = today.getDay();
let gun;
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
if (d == 1 ){
    gun = "Pazartesi"
}else if(d == 2)
    gun = "Salı"
 else if(d == 3)
    gun = "Çarşamba"
 else if(d == 4)
    gun = "Perşembe"
 else if(d == 5)
    gun = "Cuma"
 else if(d == 6)
    gun = "Cumartesi"
 else if(d == 7)
    gun = "Pazar"   

let date = document.querySelector("#txt")
date.innerHTML = `${h} : ${m} : ${s}   ${gun}`
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime();
  setInterval("startTime()" , 1000)