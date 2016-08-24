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

function printNews(targetNews, target1News) {
    if (f > 1){
    }
    if (f == newsLength) {
        f = 1;
        newsUpdateAll();
    }
    var currentCompNews = divNews.title[f];
    var currentCompNews1 = newsName + ", " + newsHours[f];
    f++;

    var classNameNews = "ghost1";
    var classNameNews1 = "ghost2";
    var durationNews = 1000;

    targetNews.classList.add(classNameNews);
    setTimeout(function(){
        targetNews.innerText = currentCompNews;
        targetNews.classList.remove(classNameNews);
        target1News.innerText = currentCompNews1;
        target1News.classList.remove(classNameNews1);
    }, durationNews);
}

newsUpdateAll();


setInterval(function(){
  var targetNews = document.getElementById("news-title");
  var target1News = document.getElementById("news-name");
  printNews(targetNews, target1News);
}, 15 * 1000);
