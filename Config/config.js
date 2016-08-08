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
        city: "Treviso,it",
        language: "it",
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