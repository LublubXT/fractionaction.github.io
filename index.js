var f1 = document.getElementById('onefrac');
var f2 = document.getElementById('twofrac');

var d1 = document.getElementById('dec1').innerHTML;
var d2 = document.getElementById('dec2').innerHTML;

var n1 = document.getElementById('one');
var n1b = document.getElementById('onebot');
var n2 = document.getElementById('two');
var n2b = document.getElementById('twobot');

var f1a = n1.value / n1b.value;
var f2a = n2.value / n2b.value;

function app() {
    f1.style.width = "200" * (n1.value / n1b.value) + "px";
    f2.style.width = "200" * (n2.value / n2b.value) + "px";

    document.getElementById('dec1').innerHTML = n1.value / n1b.value;
    document.getElementById('dec2').innerHTML = n2.value / n2b.value;
}
