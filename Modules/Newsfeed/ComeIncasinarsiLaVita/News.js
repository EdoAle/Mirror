var newsLength;

var allLenght;

var newsAll = [["", "", ""],["", "", ""]];

var divNews = {
    title: [""],
    date: []
}

var newsName = 'Corriere della Sera';

var newsHours = [];

var f = 1;

function newsUpdateAll(){
    newsUpdate1();
    newsUpdate2();
}

function printNews() {
    if (f == allLenght) {
        f = 1;
        newsUpdateAll();
    }
    document.getElementById("news-title").innerHTML = newsAll[f][1] + ", " + newsAll[i][2];
    document.getElementById("news-name").innerHTML = newsAll[f][0];
    f++;
}

newsUpdateAll();

setInterval(printNews,newsfeed.reloadTime);