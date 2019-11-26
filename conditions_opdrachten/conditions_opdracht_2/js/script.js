//javascript code

function checkSaldo(){

    var geldOpname = document.getElementById("geldOpname").value;

    alert(geldOpname);

    var bankSaldo = 1000;

    var restTotaal = 1000 - geldOpname;

    if(restTotaal < 25){
            alert("sorry, je hebt te weinig saldo");
    }
}