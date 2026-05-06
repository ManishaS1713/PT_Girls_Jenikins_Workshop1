var arrival = context.variableManager.getValue("c_Arrival");
var departure = context.variableManager.getValue("c_Depart");


var cities =["Frankfurt","London","Los Angeles","Paris","Portland","San Francisco","Seattle","Sydney","Zurich"];

if (arrival === departure) {

    var newDeparture;

    do {
        var randomIndex = Math.floor(Math.random() * cities.length);
        newDeparture = cities[randomIndex];
    } while (newDeparture === arrival); // avoid same city

    context.variableManager.setValue("c_Depart", newDeparture);

    logger.info("Conflict detected! Arrival and Departure were same: " + arrival);
    logger.info("New Departure selected: " + newDeparture);
}