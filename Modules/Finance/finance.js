updateTime = 1000;

function financeUpdate() {
    

function printFinance(arr) {

    for (var i = 0; i <= 7; i++) {

        //Cambia gli id con quelli dell'index.html (non mettere i numeri)

        document.getElementById("symbol" + i).innerHTML = arr.query.results.quote[i].Symbol;
        document.getElementById("bid" + i).innerHTML = arr.query.results.quote[i].LastTradePriceOnly;
        var div = arr.query.results.quote[i].PercentChange;
        if (div[0] == "+"){
            document.getElementById("PercentChange" + i).innerHTML = div + "&#32;" + '<i class="material-icons">trending_up </i>';
        }else if(div[0] == "-"){
            document.getElementById("PercentChange" + i).innerHTML = div + "&#32;" + '<i class="material-icons">trending_down </i>';
        }else{
            document.getElementById("PercentChange" + i).innerHTML = div;
        }
    }
}

var xmlhttp = new XMLHttpRequest();
var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22UCG.MI%22%2C%22FTSEMIB.MI%22%2C%22EBAY%22%2C%22AMZN%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        printFinance(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
};

financeUpdate();

setInterval(financeUpdate, updateTime)
