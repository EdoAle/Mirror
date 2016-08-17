/*
*  Copyright (C) 2016 EdoAle
*
*  This program isn't free software: you can't redistribute it and/or modify
*  it , or any later version.
*
*  Version 1.0
*  Author: Alessandro Benetton, Edoardo Scarpel
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

/*function fadeOut(id,val){ if(isNaN(val)){ val = 9;}
  document.getElementById(id).style.opacity='0.'+val;
  //For IE
  document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
  if(val>0){
    val--;
    setTimeout('fadeOut("'+id+'",'+val+')',90);
  }else{return;}
}

function fadeIn(id,val){
// ID of the element to fade, Fade value[min value is 0]
  if(isNaN(val)){ val = 0;}
  document.getElementById(id).style.opacity='0.'+val;
  //For IE
  document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
  if(val<9){
    val++;
    setTimeout('fadeIn("'+id+'",'+val+')',90);
  }else{return;}
}*/



function updateComp(){
    if (hn > 5 && hn < 12){
        if (q > 0){
        //$("#compliments").fadeTo("slow", 0);
        //$("#compliments").fadeTo("slow", 1);
        }
        if (q == Object.keys(compliments.morning).length){
            q = 0;
        }
        document.getElementById("compliments").innerHTML = compliments.morning[q];
        q++;
    }
    if (hn > 11 && hn < 15){
        if (q > 0){
            fadeOut("compliments");
        }
        fadeIn("compliments");
        if (q == Object.keys(compliments.lunch).length){
            q = 0;
        }
        document.getElementById("compliments").innerHTML = compliments.lunch[q];
        q++;
    }
    if (hn > 14 && hn < 19){
        if (q > 0){
            fadeOut("compliments");
        }
        fadeIn("compliments");
        if (q == Object.keys(compliments.afternoon).length){
            q = 0;
        }
        document.getElementById("compliments").innerHTML = compliments.afternoon[q];
        q++;
    }
    if (hn > 18 && hn < 23){
        if (q > 0){
            fadeOut("compliments");
        }
        fadeIn("compliments");
        if (q == Object.keys(compliments.evening).length){
            q = 0;
        }
        document.getElementById("compliments").innerHTML = compliments.evening[q];
        q++;
    }
    if (hn > 22 && hn < 6){
        if (q > 0){
            fadeOut("compliments");
        }
        fadeIn("compliments");
        if (q == Object.keys(compliments.night).length){
            q = 0;
        }
        document.getElementById("compliments").innerHTML = compliments.night[q];
        q++;
    }
}

updateComp();

setInterval(updateComp, 5000);