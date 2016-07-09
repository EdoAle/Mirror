/**
 * Created by alebe on 03/07/2016.
 */


    var ical = require('https://calendar.google.com/calendar/ical/it.italian%23holiday%40group.v.calendar.google.com/public/basic.ics')
  , months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
 
    ical.fromURL('http://lanyrd.com/topics/nodejs/nodejs.ics', {}, function(err, data) {
      for (var k in data){
        if (data.hasOwnProperty(k)) {
          var ev = data[k]
          console.log("Conference",
            ev.summary,
            'is in',
            ev.location,
            'on the', ev.start.getDate(), 'of', months[ev.start.getMonth()]);
        }
      }
    });