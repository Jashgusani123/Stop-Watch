let timer = false;
let ms = 0;
let s =0;
let hr = 0;
let  m = 0;
function start() {
    timer = true;
    t();
}
function stop() {
    timer = false;
    t();
}
function reset() {

}
function t() {
    if (timer == true) {
        ms = ms + 1;
        if (ms == 100) {
            s = s + 1;
            ms = 0;
        }
        if (s == 60) {
            m = m + 1;
            s = 0;
        }
        if (m == 60) {
            hr = hr + 1;
            m = 0;

        }
        
        
        setTimeout("t()", 0);
        document.getElementById("ms").innerText = ms;
        document.getElementById("s").innerText = s<10 ? "0"+s:s;
        document.getElementById("m").innerText = m<10 ? "0"+m:m;
        document.getElementById("h").innerText = hr<10 ? "0"+hr:hr;

    }
}