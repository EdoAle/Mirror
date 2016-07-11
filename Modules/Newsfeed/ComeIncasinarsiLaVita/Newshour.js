function newsUpdate1() {

//XML send request


var newsDate = [""];

var resultDate = [""];

var newnewsDate = [""];

var result = [""];

var currentDate = new Date();



for (var i = 0; i < (newsfeed.url).lenght; i++){
var xhttp = new XMLHttpRequest();
xhttp[i].onreadystatechange = function() {
    if (xhttp[i].readyState == 4 && xhttp[i].status == 200) {
        myFunction(xhttp[i],i);
    }
};
xhttp[i].open("GET", newsfeed.url[i], true);
xhttp[i].send();
}

function myFunction(xml,k) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("item");
    allLenght = allLenght + x.lenght;
    var relativeLenght = allLenght - x.lenght;
    for (var i = relativeLenght; i < allLenght; i++) {
        for (var z = 0; z < x.lenght; z++){
            newsDate[i] = x[z].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
            newnewsDate[i] = new Date(newsDate[i]);
            result[i] = ((currentDate - newnewsDate[i])/1000)/60;
            newsAll[i][0] = x[z].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            newsAll[i][1] = newsfeed.newsName[k];
            newsAll[i][2] = Math.round(result[i]);
        }
    }
};

function setParams() {
    bubbleSort();
    setRules();
};

function setRules(x){
    for (var i = 0; i < allLenght; i++) {
        if (newsAll[i][2] >= 1440){
            newsAll[i][2] = Math.round((newsAll[i][2] / 60) / 24);
            if (newsAll[i][2] > 1){
                newsAll[i][2] = newsAll[i][2] + " giorni fa:";
            }else{
                newsAll[i][2] = newsAll[i][2] + " giorno fa:";
            }
        }else if (newsAll[i][2] >= 60){
            newsAll[i][2] = Math.round(resultDate[i] / 60);
            if (newsAll[i][2] > 1){
                newsAll[i][2] = newsAll[i][2] + " ore fa:";
            }else{
                newsAll[i][2] = newsAll[i][2] + " ora fa:";
            }
        }else{
            newsAll[i][2] = newsAll[i][2];
            if (newsAll[i][2] > 1){
                newsAll[i][2] = newsAll[i][2] + " minuti fa:";
            }else{
                newsAll[i][2] = newsAll[i][2] + " minuto fa:";
            }
        }
    }
};

function bubbleSort() {
    var length = allLenght;
    for (var i = (length - 1); i >= 0; i--) { //Number of passes
        for (var j = (length - i); j > 0; j--) {
          //Compare the adjacent positions
            if(newsAll[j][2] < newsAll[j-1][2]) {
            //Swap the numbers
                var tmp = newsAll[j][2];
                var tmp2 = newsAll[j][0];
                var tmp3 = newsAll[j][1];
                newsAll[j][2] = newsAll[j-1][2];
                newsAll[j][0] = newsAll[j-1][0];
                newsAll[j][1] = newsAll[j-1][1];
                newsAll[j-1][2] = tmp;
                newsAll[j-1][0] = tmp2;
                newsAll[j-1][1] = tmp3;
            }
        }        
    }
};
};
