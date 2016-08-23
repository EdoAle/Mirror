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
        lat: 0,
        lng: 0
}
var newsfeed = {
        url: [
                "http://xml.corriereobjects.it/rss/homepage.xml",
                "http://www.repubblica.it/rss/homepage/rss2.0.xml"
        ],
        newsName: [
                "Corriere della sera",
                "La Repubblica"
        ],
        reloadTime: 10000,
}

var finance = {
        mark1: "YHOO",
        mark2: "AAPL",
        mark3: "GOOGL",
        mark4: "MSFT",
        mark5: "UCG.MI",
        mark6: "FTSEMIB.MI",
        mark7: "EBAY",
        mark8: "AMZN"
}