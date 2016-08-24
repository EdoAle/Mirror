function impostGio(numberDay){
//alert("sono nel programma");
var days1 = [
    'Luned&igrave;',
    'Marted&igrave;',
    'Mercoled&igrave;',
    'Gioved&igrave;',
    'Venerd&igrave;',
    'Sabato',
    'Domenica'
];
//alert("ho impostato i giorni");
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
setTimeout(impostGio(), 60*1000);