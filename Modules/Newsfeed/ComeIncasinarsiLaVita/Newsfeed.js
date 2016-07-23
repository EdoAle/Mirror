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
    if (xhtt[i].readyState == 4 && xhttp[i].status == 200) {
        myFunction(xhttp[i],i);
    }
};
xhttp.open("GET", newsfeed.url[i], true);
xhttp.send();
}


//Export the data

function myFunction(xml,k) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item");
    allLenght = allLenght + x.lenght;
    var relativeLenght = allLenght - x.lenght;
    for (var i = relativeLenght; i < allLenght; i++) {;
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