var vm = context.variableManager;

var flightCount = parseInt(vm.getValue("C_flightID_matchNr"));

var limit = 2;

var result = "";
var cgiPart = "";

var middle = "removeFlights.x=46&removeFlights.y=8&";

// loop flights
for (var i = 1; i <= flightCount; i++) {

    var flightVal = vm.getValue("C_flightID_" + i);

    // ✔ always send flightID
    result += "flightID=" + flightVal + "&";

    // ✔ ONLY first 2 flights selected
    if (i <= limit) {
        result += i + "=on&";
    }
}

// build cgifields (same order as backend expects)
for (var j = 1; j <= flightCount; j++) {

    var cgiVal = vm.getValue("C_cgifields_" + j);

    if (j === flightCount) {
        cgiPart += ".cgifields=" + cgiVal;
    } else {
        cgiPart += ".cgifields=" + cgiVal + "&";
    }
}

// final request body
var finalString = result + middle + cgiPart;

// save
vm.setValue("bodytext", finalString);