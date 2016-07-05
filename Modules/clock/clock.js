function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var n = today.getDay();
    var d = today.getUTCDate();
    var mo = today.getUTCMonth();
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
        'Luned&igrave;',
        'Marted&igrave;',
        'Mercoled&igrave;',
        'Gioved&igrave;',
        'Venerd&igrave;',
        'Sabato',
        'Domenica'
    ];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        days[n] + " " + d + " " + months[mo] + " <br />" + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}