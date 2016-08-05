/**
 * Created by edosca on 05/08/2016.
 */

var ical = require('ical'),
months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
 
var e = 0;
var f = 0;
var control = [""];

ical.fromURL('https://calendar.google.com/calendar/ical/it.italian%23holiday%40group.v.calendar.google.com/public/basic.ics', {}, function(err, data) {
for (var k in data){
  if (data.hasOwnProperty(k)) {
    e = e +1;
    var ev = data[k];
    var summary = ev.summary;
    control[e] = summary;
    if (control[e] == control[e-1]){
      f = f + 0;
    }else{
      var dstart = new Date(ev.start);
      f = f +1;
      document.getElementById("calendar-events-maj" + f).innerHTML = summary + ' il ' + dstart.getDate() + ' di ' + months[dstart.getMonth()] + " " + f + "<br />";
    }
  }
}
});