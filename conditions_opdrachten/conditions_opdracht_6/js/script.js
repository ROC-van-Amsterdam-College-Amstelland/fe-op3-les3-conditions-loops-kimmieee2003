//javascript code

var myOperator = "*";
var myNumber1 = prompt("geef aub een getal op?");
var myNumber2 = prompt("geef aub een getal op?");
var resultaat;

if (myOperator == "*") {
    resultaat = myNumber1 * myNumber2;
    document.getElementById("resultaat").innerHTML = resultaat;
}

else if (myOperator == "/") {
    resultaat = myNumber1 / myNumber2;
    document.getElementById("resultaat").innerHTML = resultaat;
}
