//javascript code
function checkSaldo(){

    var bedragDatGestortWordt = document.getElementById("geldOpname").value;

    

    if(bedragDatGestortWordt < 500){
            alert("sorry, geen geld gestort");
    }

    if(bedragDatGestortWordt > 500){
        alert("er is een salaris/bonis gestort");
    }

    if(bedragDatGestortWordt == 500){
        alert("er is salaris gesort");
    }


}