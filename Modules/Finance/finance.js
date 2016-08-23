updateTime = 5*1000;

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
    document.getElementById("finance-name").innerHTML = arr.query.results.quote[0].Name;
}

var xmlhttp = new XMLHttpRequest();
var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + finance.mark1 + "%22%2C%22" + finance.mark2 + "%22%2C%22" + finance.mark3 + "%22%2C%22" + finance.mark4 + "%22%2C%22" + finance.mark5 + "%22%2C%22" + finance.mark6 + "%22%2C%22" + finance.mark7 + "%22%2C%22" + finance.mark8 + "%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";

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
