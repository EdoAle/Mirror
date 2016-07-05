/**
 * Created by alebe on 03/07/2016.
 */

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp);
    }
  };
  xhttp.open("GET", "http://xml.corriereobjects.it/rss/homepage.xml", true);
  xhttp.send();
function myFunction(xml) {
  var newsName = 'Corriere della Sera' ;
  document.getElementById("news-name").innerHTML = newsName; 
  var i;
  var xmlDoc = xml.responseXML;
  var divNews;
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) {
    divNews += x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "<br />";
  }
  document.getElementById("news-title").innerHTML = divNews;
}