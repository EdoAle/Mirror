/*
*  Copyright (C) 2016 EdoAle
*
*  This program isn't free software: you can't redistribute it and/or modify
*  it , or any later version.
*
*  Version 1.0
*  Author: Alessandro Benetton, Edoardo Scarpel
*/

var calNum = 4;
var ical = require('ical'),
months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

var e = 0;
var f = 0;
var control = [""];
var dstart = [0];
var summary = [""];

function reloadCalendar() {
ical.fromURL(config.calendar[calNum], {}, function(err, data) {
for (var k in data){
  if (data.hasOwnProperty(k)) {
    f++;
    var ev = data[k];
    var dateNow = new Date();
    var yearNow = dateNow.getFullYear() + 1;
    var date = new Date(ev.start);
    if (date < dateNow && calNum != 3){
        date.setFullYear(yearNow);
    }else if (calNum == 3){
        dateNow.setFullYear(config.calendarYear[calNum]);
    }
    control[f] = ev.summary;
    if (ev.summary != undefined){
        if (date >= dateNow){
            if (control[f] != control[f-1]){
                e++;
                summary[e] = ev.summary;
                dstart[e] = date;
            }
        }
    }
  }
} 
classificationCal1();
for (var i=1; i<9; i++){
    control[f] = summary[i];
    if(summary[i] != undefined){
        if (control[f] != control[f-1] && calNum != 3){
            document.getElementById("summary" + i).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summary[i];
            document.getElementById("datecal" + i).innerHTML = dstart[i].getDate() + ' ' + months[dstart[i].getMonth()];
        }else if(calNum == 3){
            document.getElementById("summary" + i).innerHTML = ' <i class="material-icons" style="font-size:17px">event</i> ' + summary[i];
            document.getElementById("datecal" + i).innerHTML = dstart[i].getDate() + ' ' + months[dstart[i].getMonth()];
        }
    }
}
});
}
function classificationCal1() {
    var length = summary.length;
    for (var i = (length - 1); i >= 0; i--) { //Number of passes
        for (var j = (length - i); j > 0; j--) {
          //Compare the adjacent positions
            if(dstart[j] < dstart[j-1]) {
            //Swap the numbers
            var tmp = dstart[j];
            var tmp2 = summary[j];
            dstart[j] = dstart[j-1];
            summary[j] = summary[j-1];
            dstart[j-1] = tmp;
            summary[j-1] = tmp2;
            }
        }        
    }
};
reloadCalendar();
setInterval(reloadCalendar, 5*60*1000);