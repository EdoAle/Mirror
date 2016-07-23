function newsUpdate1() {

//XML send request

var relativeLenght = 0;

var newsDate = [""];

var resultDate = [""];

var newnewsDate = [""];

var result = [""];

var currentDate = new Date();



var xhttp = new XMLHttpRequest();
alert("Ciao1");
xhttp.onreadystatechange = function() {
alert("Ciao2");
    if (xhttp.readyState == 4 && xhttp.status == 200) {
alert("Ciao3");
        myFunction(xhttp);
alert("Ciao4");
    }
};
alert("Ciao5");
xhttp.open("GET", "http://xml.corriereobjects.it/rss/homepage.xml", true);
alert("Ciao6");
xhttp.send();
alert("Ciao7");

function myFunction(xml) {
    var k = 0;
alert("Ciao8");
    var xmlDoc = xml.responseXML;
alert("Ciao9");
    var x = xmlDoc.getElementsByTagName("item");
alert("Ciao10");
    var z = 0;
alert("Ciao11");
    for (var i = relativeLenght; i < (relativeLenght + x.lenght); i++) {
alert("Ciao12");
        newsDate = x[z].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
alert("Ciao13");
        newnewsDate = new Date(newsDate[i]);
alert("Ciao14");
        result = ((currentDate - newnewsDate[i])/1000)/60;
alert("Ciao15");
        newsAll[i][0] = x[z].getElementsByTagName("title")[0].childNodes[0].nodeValue;
alert("Ciao16");
        newsAll[i][1] = newsfeed.newsName[k];
alert("Ciao17");
        newsAll[i][2] = Math.round(result);
alert("Ciao18");
        z++;
alert("Ciao19");
        relativeLenght++;
alert("Ciao20");
    }
};

setParams();
alert("Ciao21");

function setParams() {
alert("Ciao22");
    bubbleSort();
alert("Ciao23");
    setRules();
alert("Ciao24");
};

function setRules(x){
alert("Ciao25");
    for (var i = 0; i < allLenght; i++) {
alert("Ciao26");
        if (newsAll[i][2] >= 1440){
alert("Ciao27");
            newsAll[i][2] = Math.round((newsAll[i][2] / 60) / 24);
alert("Ciao28");
            if (newsAll[i][2] > 1){
alert("Ciao29");
                newsAll[i][2] = newsAll[i][2] + " giorni fa:";
alert("Ciao30");
            }else{
alert("Ciao31");
                newsAll[i][2] = newsAll[i][2] + " giorno fa:";
alert("Ciao32");
            }
        }else if (newsAll[i][2] >= 60){
alert("Ciao33");
            newsAll[i][2] = Math.round(resultDate[i] / 60);
alert("Ciao34");
            if (newsAll[i][2] > 1){
alert("Ciao35");
                newsAll[i][2] = newsAll[i][2] + " ore fa:";
alert("Ciao36");
            }else{
alert("Ciao37");
                newsAll[i][2] = newsAll[i][2] + " ora fa:";
alert("Ciao38");
            }
        }else{
            newsAll[i][2] = newsAll[i][2];
alert("Ciao39");
            if (newsAll[i][2] > 1){
alert("Ciao40");
                newsAll[i][2] = newsAll[i][2] + " minuti fa:";
alert("Ciao41");
            }else{
alert("Ciao42");
                newsAll[i][2] = newsAll[i][2] + " minuto fa:";
alert("Ciao43");
            }
        }
    }
};

function bubbleSort() {
alert("Ciao44");
    var length = allLenght;
alert("Ciao45");
    for (var i = (length - 1); i >= 0; i--) { //Number of passes
alert("Ciao46");
        for (var j = (length - i); j > 0; j--) {
alert("Ciao47");
          //Compare the adjacent positions
            if(newsAll[j][2] < newsAll[j-1][2]) {
alert("Ciao48");
            //Swap the numbers
                var tmp = newsAll[j][2];
alert("Ciao49");
                var tmp2 = newsAll[j][0];
alert("Ciao50");
                var tmp3 = newsAll[j][1];
alert("Ciao51");
                newsAll[j][2] = newsAll[j-1][2];
alert("Ciao52");
                newsAll[j][0] = newsAll[j-1][0];
alert("Ciao53");
                newsAll[j][1] = newsAll[j-1][1];
alert("Ciao54");
                newsAll[j-1][2] = tmp;
alert("Ciao55");
                newsAll[j-1][0] = tmp2;
alert("Ciao56");
                newsAll[j-1][1] = tmp3;
alert("Ciao57 ");
            }
        }        
    }
};
};
