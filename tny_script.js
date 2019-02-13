"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Chad Williams
   Date:   2.5.19

*/

// this is a single line comment

// window.alert("Welcome to Tulsa");


//display current date and time
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

// calc hours left
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
// display time left till new years
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";


// execute and run function for clock
runClock();
setInterval("runClock()", 1000);

function runClock(); {
    // store current date and time
    var currentDay = new Date("May 23, 2018 14:35:05");
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
}