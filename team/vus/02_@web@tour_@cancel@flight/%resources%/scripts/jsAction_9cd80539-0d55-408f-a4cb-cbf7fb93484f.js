// Step 1: Collect all flightIDs
var flightIDs = [];
var count = parseInt(context.variableManager.getValue("C_flightID_matchNr")) || 0;
 
for (var i = 1; i <= count; i++) {
    var flightID = context.variableManager.getValue("C_flightID_" + i);
    if (flightID) {
        flightIDs.push(flightID);
    }
}
 
// Step 2: Collect all cgifields
var cgiFields = [];
var count1 = parseInt(context.variableManager.getValue("C_cgifields_matchNr")) || 0;
 
for (var i = 1; i <= count1; i++) {
    var cgiField = context.variableManager.getValue("C_cgifields_" + i);
    if (cgiField) {
        cgiFields.push(cgiField);
    }
}
 
// Step 3: Build payload dynamically
var params = "";
 
// Add all flightIDs
flightIDs.forEach(function(id) {
    params += "flightID=" + id + "&";
});
 
// Add remove ALL flights button params (important)
params += "removeAllFlights.x=20&";
params += "removeAllFlights.y=8&";
 
// Add all cgifields
cgiFields.forEach(function(field) {
    params += ".cgifields=" + field + "&";
});
 
// Remove trailing &
if (params.endsWith("&")) {
    params = params.slice(0, -1);
}
 
// Store final payload
context.variableManager.setValue("finalParams", params);
 
// Debug
logger.info("Final Dynamic Payload: " + params);