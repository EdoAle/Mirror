/*
*  Copyright (C) 2016 EdoAle
*
*  This program isn't free software: you can't redistribute it and/or modify
*  it , or any later version.
*
*  Version 1.0
*  Author: Alessandro Benetton, Edoardo Scarpel
*/
//$(Document).ready(function{
var q = 0;

var compliments = {
    morning:[
      "Buongiorno!",
      "Ti vedo in forma!",
      "Pronto per affrontare questa giornata?"
    ],
    lunch:[
      "Buon pranzo!",
      "Hai fame? Ehehe credo proprio di si!"
    ],
    afternoon:[
      "Sei stanco? Meglio se fai un riposino!",
      "Esci con gli amici?"
    ],
    evening:[
      "Pronto per uscire?",
      "Buona cena!"
    ],
    night:[
      "Buonanotte!",
      "Fai bei sogni!"
    ]
};

function updateComp(target){
  var tn = new Date();
  var hn = tn.getHours(); 
  var ss = tn.getSeconds();

  var comp = (function(hn, allComps){
    if (hn > 5 && hn < 12) { return allComps.morning; }
    if (hn > 11  && hn < 15) { return allComps.lunch; }
    if (hn > 14  && hn < 19) { return allComps.afternoon; }
    if (hn > 18  && hn < 23) { return allComps.evening; }
    if (hn > 22  && hn < 6) { return allComps.night; }
    return [""];
  })(hn, compliments);
  
  // ----------------
  // get the "next" compliment
  // ----------------
  q = q % Object.keys(comp).length;
  var currentComp = comp[q];
  q++;
  // ----------------
  
  // ----------------
  // fade the existing compliment then replace it and fade in.
  // ----------------
  var className = "ghost";
  var duration = 1000;

  target.classList.add(className);
  setTimeout(function(){
    target.innerText = currentComp;
    target.classList.remove(className);
  }, duration);
  // ----------------
}

setInterval(function(){
  var target = document.getElementById("compliments");
  updateComp(target);
}, 30 * 1000);

//});
