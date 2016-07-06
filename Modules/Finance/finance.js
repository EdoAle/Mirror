
var xmlhttp = new XMLHttpRequest();
var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22UCG.MI%22%2C%22FTSE.MI%22%2C%22EBAY%22%2C%22AMZN%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    out = arr.query.results.quote[0].PercentChange;
    out1 = arr.query.results.quote[0].Bid;
    out2 = arr.query.results.quote[0].Symbol;
    out3 = arr.query.results.quote[1].PercentChange;
    out4 = arr.query.results.quote[1].Bid;
    out5 = arr.query.results.quote[1].Symbol;
    out6 = arr.query.results.quote[2].PercentChange;
    out7 = arr.query.results.quote[2].Bid;
    out8 = arr.query.results.quote[2].Symbol;
    out9 = arr.query.results.quote[3].PercentChange;
    out10 = arr.query.results.quote[3].Bid;
    out11 = arr.query.results.quote[3].Symbol;
    out12 = arr.query.results.quote[4].PercentChange;
    out13 = arr.query.results.quote[4].Bid;
    out14 = arr.query.results.quote[4].Symbol;
    out15 = arr.query.results.quote[5].PercentChange;
    out16 = arr.query.results.quote[5].Bid;
    out17 = arr.query.results.quote[5].Symbol;
    out18 = arr.query.results.quote[6].PercentChange;
    out19 = arr.query.results.quote[6].Bid;
    out20 = arr.query.results.quote[6].Symbol;
    out21 = arr.query.results.quote[7].PercentChange;
    out22 = arr.query.results.quote[7].Bid;
    out23 = arr.query.results.quote[7].Symbol;
    document.getElementById("finance").innerHTML = out;
    document.getElementById("finance1").innerHTML = out1;
    document.getElementById("finance2").innerHTML = out2;
    document.getElementById("finance3").innerHTML = out3;
    document.getElementById("finance4").innerHTML = out4;
    document.getElementById("finance5").innerHTML = out5;
    document.getElementById("finance6").innerHTML = out6;
    document.getElementById("finance7").innerHTML = out7;
    document.getElementById("finance8").innerHTML = out8;
    document.getElementById("finance9").innerHTML = out9;
    document.getElementById("finance10").innerHTML = out10;
    document.getElementById("finance11").innerHTML = out11;
    document.getElementById("finance12").innerHTML = out12;
    document.getElementById("finance13").innerHTML = out13;
    document.getElementById("finance14").innerHTML = out14;
    document.getElementById("finance15").innerHTML = out15;
    document.getElementById("finance16").innerHTML = out16;
    document.getElementById("finance17").innerHTML = out17;
    document.getElementById("finance18").innerHTML = out18;
    document.getElementById("finance19").innerHTML = out19;
    document.getElementById("finance20").innerHTML = out20;
    document.getElementById("finance21").innerHTML = out21;
    document.getElementById("finance22").innerHTML = out22;
    document.getElementById("finance23").innerHTML = out23;
}