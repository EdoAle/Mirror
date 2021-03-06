function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var n = today.getDay();
    var d = today.getUTCDate();
    var mo = today.getUTCMonth();
    var y = today.getFullYear();
    var months = [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre'
    ];
    var days = [
        'Domenica',
        'Luned&igrave;',
        'Marted&igrave;',
        'Mercoled&igrave;',
        'Gioved&igrave;',
        'Venerd&igrave;',
        'Sabato'
    ];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('Data').innerHTML = days[n] + ", " + d + " " + months[mo] + " " + y; 
    document.getElementById('ora1').innerHTML = h + ":" + m;
    document.getElementById('ora2').innerHTML = s;
    impostGio(n);
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}