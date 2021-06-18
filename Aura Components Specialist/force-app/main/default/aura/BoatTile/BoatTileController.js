({
    onBoatClick : function(component, event, helper) {
        let boatId = component.get("v.boat.Id");
        let createEvent = component.getEvent("boatSelect");
        createEvent.setParams({ "boatId": boatId });
        createEvent.fire();
        
        let boat = component.get("v.boat");
        let createBoatSelectedEvent = $A.get("e.c:BoatSelected");
        createBoatSelectedEvent.setParams({ "boat": boat });
        createBoatSelectedEvent.fire();
        console.log("BOATSELECTED EVENT FIRED!");

        let createMapEvent = $A.get("e.c:PlotMapMarker");
        let lat = component.get("v.boat.Geolocation__Latitude__s"); 
        let long = component.get("v.boat.Geolocation__Longitude__s");
        console.log("lat=" + lat);
        console.log("long=" + long);
        createMapEvent.setParams({ 
            "sObjectId": boat.Id,
            "lat" : lat,
            "long" : long,
            "label" : boat.Name
        });
        createMapEvent.fire();

    }
})