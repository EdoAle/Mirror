
/**
 * Created by alebe on 03/07/2016.
 */
var ReloadTime = 10000;

var reloadTime2 = 1800000;
function newsUpdate() {
    
//XML send request

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        myFunction(xhttp);
    }
};
xhttp.open("GET", "http://xml.corriereobjects.it/rss/homepage.xml", true);
xhttp.send();

//Export the data

var divNews = {
    title: [""],
    date: [""]
}

function myFunction(xml) {
    var newsName = 'Corriere della Sera';
    document.getElementById("news-name").innerHTML = newsName;
    var i = 0;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < x.length; i++) {
        divNews.title[i] = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        divNews.date[i] = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    }
    document.getElementById("news-title").innerHTML = divNews.title[0];
    document.getElementById("news-name").innerHTML = newsHours[0];
}
var f = 1;
// Update the title
function printTitle() {  
    document.getElementById("news-title").innerHTML = divNews.title[f];
    document.getElementById("news-name").innerHTML = newsHours[f];
    f++;
}

setInterval(printTitle, ReloadTime);
};

newsUpdate();

setInterval(newsUpdate, reloadTime2);