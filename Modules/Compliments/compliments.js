/**
 * Created by edosca on 06/08/2016.
 */
var q = 0;

var compliments = {
    morning:[
        "Buongiorno!",
        "Ti vedo in forma!",
        "Pronto per affrontare questa giornata?"
    ],
    lunch:[
        "Hai fame? Ehehe credo proprio di si!",
        "Buon pranzo!"
    ],
    afternoon:[
        "Sei stanco? Meglio se fai un riposino!"
    ],
    evening:[
        "Pronto per uscire?",
        "Buona cena!"
    ],
    night:[
        "Buonanotte!"
    ]
};

var tn = new Date();
var hn = tn.getHours();

function complimentsUpdate() {

if (hn > 5 && hn < 12){
    if (q > Object.keys(compliments.morning).length){
        q = 0;
        complimentsUpdate();
    }
    function printCompliments() {
        document.getElementById("compliments").innerHTML = compliments.morning[q];
        q++;
    }
    setInterval(printCompliments, 10000);
}

if (hn > 11 && hn < 15){
    if (q > Object.keys(compliments.lunch).length){
        q = 0;
        complimentsUpdate();
    }
    function printCompliments() {
        document.getElementById("compliments").innerHTML = compliments.lunch[q];
        q++;
    }
    setInterval(printCompliments, 10000);
}

if (hn > 14 && hn < 19){
    if (q > Object.keys(compliments.afternoon).length){
        q = 0;
        complimentsUpdate();
    }
    function printCompliments() {
        document.getElementById("compliments").innerHTML = compliments.afternoon[q];
        q++;
    }
    setInterval(printCompliments, 10000);
}

if (hn > 18 && hn < 23){
    if (q > Object.keys(compliments.evening).length){
        q = 0;
        complimentsUpdate();
    }
    function printCompliments() {
        document.getElementById("compliments").innerHTML = compliments.evening[q];
        q++;
    }
    setInterval(printCompliments, 10000);
}

if (hn > 22 && hn < 6){
    if (q > Object.keys(compliments.night).length){
        q = 0;
        complimentsUpdate();
    }
    function printCompliments() {
        document.getElementById("compliments").innerHTML = compliments.night[q];
        q++;
    }
    setInterval(printCompliments, 10000);
}

}