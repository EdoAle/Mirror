/**
 * Created by alebe on 03/07/2016.
 */
var todayDate	= new Date();
var msgData	= todayDate.toISOString();
var startDate	= e.start.toISOString();
var endDate	= e.end.toISOString();

var icsMSG1 = "BEGIN:VCALENDARrnVERSION:2.0rnPRODID:https://www.google.com/rnBEGIN:VEVENTrnUID:https://www.google.com/rnDTSTAMP:" + msgData + "ZrnDTSTART:" + startDate + "rn";

var icsMSG2 = '';
if(endDate != '') {
    icsMSG2 = "DTEND:" + endDate +"rn";
}

icsMSG3 = "SUMMARY:" + title + "rnEND:VEVENTrnEND:VCALENDAR";

icsMSG = icsMSG1 + icsMSG2 + icsMSG3;

$('.test-ics').click(function(){
    window.open( "data:text/calendar;charset=utf8," + escape(icsMSG));
});