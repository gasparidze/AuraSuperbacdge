({
    doInit : function(component, event, helper) {
        if($A.get("e.force:createRecord")){
            component.set("v.showNewButton",true);
        }
    },
    newBoatRecord: function(component, event, helper){
        let boatName = component.get("v.boatName");
        var createBoatEvent = $A.get("e.force:createRecord");
        createBoatEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'Name' : boatName
            }
        });
        createBoatEvent.fire();
    },
    onFormSubmit: function(component, event, helper){
        let boatName = component.get("v.boatName");
        let createEvent = component.getEvent("formsubmit");
        createEvent.setParams({ "boatName" : boatName });
        createEvent.fire();
        console.log("in search form, event is fired  " + boatName);
    }
});
