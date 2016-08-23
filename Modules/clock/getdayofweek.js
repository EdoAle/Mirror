function impostGio(){
//alert("sono nel programma");
var days1 = [
    'Domenica',
    'Luned&igrave;',
    'Marted&igrave;',
    'Mercoled&igrave;',
    'Gioved&igrave;',
    'Venerd&igrave;',
    'Sabato'
];
//alert("ho impostato i giorni");

var today1 = new Date();
var numberDay = today1.getDay() + 1;
var fdays1 = 6;
for (var id = 0; id != fdays1; id++) {
    if (numberDay <= fdays1) {
        document.getElementById("day" + (id + 1)).innerHTML = days1[numberDay];
        numberDay++;
    } else {
        numberDay = 0;
        document.getElementById("day" + (id + 1)).innerHTML = days1[numberDay];
        numberDay++;
    }
}
};
setInterval(impostGio(), 30*60*1000);