
        function getcFinance() {
            var cFinance = new XMLHttpRequest();
            cFinance.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json" , true);
            cFinance.send(null);
            var currentFinance = JSON.parse(cFinance.response);
            return(currentFinance);
        }
        var printFinance = getcFinance();
        document.getElementById("finance").innerHTML = "ciao";