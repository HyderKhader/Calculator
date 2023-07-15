var a = "";
function get_input(value) {
    if (a.length > 16) {
    }
    else {
        a += value;
        document.getElementById("sub1").innerHTML = a;
    }
}
function submit() {
    var expr = a;
    var out = eval(expr);
    document.getElementById("sub1").innerHTML = out;
    a = out;
}
function clr() {
    a = "0";
    document.getElementById("sub1").innerHTML = a;
    a = "";
}
function bks() {
    var l = a.length;
    var e = l - 1;
    var slice = a.slice(0, e);
    a = slice;
    document.getElementById("sub1").innerHTML = a;
}
