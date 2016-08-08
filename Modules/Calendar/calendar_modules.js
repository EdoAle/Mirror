/*
*  Copyright (C) 2016 EdoAle
*
*  This program isn't free software: you can't redistribute it and/or modify
*  it , or any later version.
*
*  Version 1.0
*  Author: Alessandro Benetton, Edoardo Scarpel
*/
var updateCal = 1800000;

function reloadCalendar() {


var ical = require('ical'),
months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
 
var e = 0;
var f = 0;
var control = [""];
var dstart = [0];
var summaryFin = [0];

ical.fromURL('https://calendar.google.com/calendar/ical/it.italian%23holiday%40group.v.calendar.google.com/public/basic.ics', {}, function(err, data) {
for (var k in data){
  if (data.hasOwnProperty(k)) {
    e = e +1;
    var ev = data[k];
    var summary = ev.summary;
    var curDate = new Date();
    control[e] = summary;
    if (control[e] == control[e-1]){
      f = f + 0;
    }else if(ev.start >= curDate){
      f = f +1;
      dstart[f] = new Date(ev.start);
      summaryFin[f] = summary;
    }
  }
}
bubbleSortCal();
//for (var p = 0; p < x; p++) {
    document.getElementById("summary" + 1).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[1];
    document.getElementById("datecal" + 1).innerHTML = dstart[1].getDate() + ' ' + months[dstart[1].getMonth()];
    document.getElementById("summary" + 2).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[2];
    document.getElementById("datecal" + 2).innerHTML = dstart[2].getDate() + ' ' + months[dstart[2].getMonth()];
    document.getElementById("summary" + 3).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[3];
    document.getElementById("datecal" + 3).innerHTML = dstart[3].getDate() + ' ' + months[dstart[3].getMonth()];
    document.getElementById("summary" + 4).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[4];
    document.getElementById("datecal" + 4).innerHTML = dstart[4].getDate() + ' ' + months[dstart[4].getMonth()];
    document.getElementById("summary" + 5).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[5];
    document.getElementById("datecal" + 5).innerHTML = dstart[5].getDate() + ' ' + months[dstart[5].getMonth()];
    document.getElementById("summary" + 6).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[6];
    document.getElementById("datecal" + 6).innerHTML = dstart[6].getDate() + ' ' + months[dstart[6].getMonth()];
    document.getElementById("summary" + 7).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[7];
    document.getElementById("datecal" + 7).innerHTML = dstart[7].getDate() + ' ' + months[dstart[7].getMonth()];
    document.getElementById("summary" + 8).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summaryFin[8];
    document.getElementById("datecal" + 8).innerHTML = dstart[8].getDate() + ' ' + months[dstart[8].getMonth()];
//}
});
function bubbleSortCal() {
    var length = summaryFin.length;
    for (var i = (length - 1); i >= 0; i--) { //Number of passes
        for (var j = (length - i); j > 0; j--) {
          //Compare the adjacent positions
            if(dstart[j] < dstart[j-1]) {
            //Swap the numbers
            var tmp = dstart[j];
            var tmp2 = summaryFin[j];
            dstart[j] = dstart[j-1];
            summaryFin[j] = summaryFin[j-1];
            dstart[j-1] = tmp;
            summaryFin[j-1] = tmp2;
            }
        }        
    }
};

}
reloadCalendar();

setInterval(reloadCalendar(), updateCal);