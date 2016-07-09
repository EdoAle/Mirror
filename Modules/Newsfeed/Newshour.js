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

var newsDate = [""];

var resultDate = [""];

var newnewsDate = [""];

var result = [""];

var currentDate = new Date();

var newsHours = [];

var newsName = 'Corriere della Sera';

function myFunction(xml) {
    var i = 0;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < x.length; i++) {
        newsDate[i] = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
        newnewsDate[i] = new Date(newsDate[i]);
        result[i] = ((currentDate - newnewsDate[i])/1000)/60;
        resultDate[i] = Math.round(result[i]);
    }
    bubbleSort();
    for (i = 0; i < x.length; i++) {
        if (resultDate[i] >= 60){
            newsHours[i] = Math.round(resultDate[i] / 60);
            if (newsHours[i] > 1){
                newsHours[i] = newsHours[i] + " ore fa:";
            }else{
                newsHours[i] = newsHours[i] + " ora fa:";
            }
            if (newsHours[i] >= 24){
                newsHours = newsHours + " giorno fa:";
            }else if (newsHours >= 48){
                newsHours = newsHours + " giorni fa:";
            }
        }else{
            newsHours[i] = resultDate[i];
            if (newsHours[i] > 1){
                newsHours[i] = newsHours[i] + " minuti fa:";
            }else{
                newsHours[i] = newsHours[i] + " minuto fa:";
            }
        }
    }
    document.getElementById("news-name").innerHTML = newsName + ", " + newsHours[0];
};
function bubbleSort() {
      var length = resultDate.length;
      for (var i = (length - 1); i >= 0; i--) { //Number of passes
        for (var j = (length - i); j > 0; j--) {
          //Compare the adjacent positions
          if(resultDate[j] < resultDate[j-1]) {
            //Swap the numbers
            var tmp = resultDate[j];
            resultDate[j] = resultDate[j-1];
            resultDate[j-1] = tmp;
          }
        }        
      }
    }

var f = 1;

// Update the hour

function printHour() {  
    document.getElementById("news-name").innerHTML = newsName + ", " + newsHours[f];
    f++;
};

setInterval(printHour, ReloadTime);
};

newsUpdate();

setInterval(newsUpdate, reloadTime2);