let hour = document.getElementById('hr');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
 setInterval(() => {
    

let day = new Date();
let hourHand = day.getHours() * 30;
let minuteHand = day.getMinutes() * 6;
let secHand = day.getSeconds() * 6;

hour.style.transform = `rotateZ(${hourHand + (minuteHand / 12)}deg)`;
minutes.style.transform = `rotateZ(${minuteHand}deg)`;
seconds.style.transform = `rotateZ(${secHand}deg)`;

// Digital Clock

let hours = document.getElementById('hour');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hr = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

let am = hr >= 12 ? 'PM' : 'AM' ;
//convert 24hr clock to 12


if(hr > 12){
    hr = hr -12
}
//add zero before single digit numbers
hr = (hr < 10) ? '0' + hr : hr;
min = (min < 10) ? '0' + min : min;
sec = (sec < 10) ? '0' + sec : sec;

hours.innerHTML = hr;
minute.innerHTML = min;
second.innerHTML = sec;
ampm.innerHTML = am;
});
