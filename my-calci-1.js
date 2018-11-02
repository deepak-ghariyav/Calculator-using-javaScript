//for digits and operators
function digit(num) {
    var txt = document.getElementById("tb").value;
    txt = txt + num;
    document.getElementById("tb").value = txt;
}



//for CLEAR button
function clr() {
    document.getElementById("tb").value = "";
}

//for equal button
function equal_button() {
    var result = document.getElementById("tb").value;
    document.getElementById("tb").value = eval(result);
}