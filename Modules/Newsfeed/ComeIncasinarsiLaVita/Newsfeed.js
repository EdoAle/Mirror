function newsUpdate2() {


//XML send request


var titleNews = [];

var newnewsDate = [];

var cDate = new Date();

var result = [];

var result1 = [];

var newsName = 'Corriere della Sera';

var newsDate = [];


for (var i = 0; i < (newsfeed.url).lenght; i++){
var xhttp = new XMLHttpRequest();
xhttp[i].onreadystatechange = function () {
    if (xhtt[i]p.readyState == 4 && xhttp[i].status == 200) {
        myFunction(xhttp[i],i);
    }
};
xhttp.open("GET", newsfeed.url[i], true);
xhttp.send();
}


//Export the data

function myFunction(xml) {
    var i = 0;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < x.length; i++) {
        divNews.title[i] = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        newsDate[i] = x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
        newnewsDate[i] = new Date(newsDate[i]);
        divNews.date[i] = ((cDate - newnewsDate[i])/1000)/60;
    }
    bubbleSort();
    document.getElementById("news-title").innerHTML = divNews.title[0];
};
function bubbleSort() {
      var length = divNews.date.length;
      for (var i = (length - 1); i >= 0; i--) { //Number of passes
        for (var j = (length - i); j > 0; j--) {
          //Compare the adjacent positions
          if(divNews.date[j] < divNews.date[j-1]) {
            //Swap the numbers
            var tmp = divNews.title[j];
            var tmp2 = divNews.date[j];
            divNews.title[j] = divNews.title[j-1];
            divNews.date[j] = divNews.date[j-1];
            divNews.title[j-1] = tmp;
            divNews.date[j-1] = tmp2;
          }
        }        
      }
    }
};