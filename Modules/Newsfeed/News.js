var newsLength;

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
    if (f > 1){
    }
    if (f == newsLength) {
        f = 1;
        newsUpdateAll();
    }
    document.getElementById("news-title").innerHTML = divNews.title[f];
    document.getElementById("news-name").innerHTML = newsName + ", " + newsHours[f];
    f++;
}

newsUpdateAll();

setInterval(printNews,newsfeed.reloadTime);
