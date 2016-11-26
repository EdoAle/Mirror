/*
*  Copyright (C) 2016 EdoAle
*
*  This program isn't free software: you can't redistribute it and/or modify
*  it , or any later version.
*
*  Version 1.0
*  Author: Alessandro Benetton, Edoardo Scarpel
*/
var config = {
        api: "02742dc10bd38602ed5b5053b6382199",
        unit: "metric",
        language: "it",
        city: "treviso,it",
        lat: 45.663932,
        lng: 12.247009,
        calendar: [
                "https://calendar.google.com/calendar/ical/it.italian%23holiday%40group.v.calendar.google.com/public/basic.ics",
                "https://calendar.google.com/calendar/ical/edoardo.scarpel55%40gmail.com/private-cb8e2405de0be8a11a8914536f6db658/basic.ics",
                "https://p17-calendars.icloud.com/holiday/IT_it.ics",
                "https://www.mozilla.org/media/caldata/ItalianHolidays.ics"
        ],
        calendarYear: [
                new Date().getFullYear(),
                new Date().getFullYear(),
                new Date().getFullYear(),
                2000

        ],
        newsUrl: [
                "http://xml.corriereobjects.it/rss/homepage.xml",
                "http://www.repubblica.it/rss/homepage/rss2.0.xml",
                "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
        ],
        newsName: [
                "Corriere della sera",
                "La Repubblica",
                "The New York Times"
        ]
}

var financeBookmarks = [
        '"YHOO"',
        '"AAPL"',
        '"GOOGL"',
        '"MSFT"',
        '"UCG.MI"',
        '"FTSEMIB.MI"',
        '"EBAY"',
        '"AMZN"'
]
