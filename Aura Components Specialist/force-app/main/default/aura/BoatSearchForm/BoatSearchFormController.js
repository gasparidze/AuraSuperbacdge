({
    init: function (component, event, helper) {
        helper.loadTypes(component);
        //var showNewButton=$A.get("e.force:createRecord");
        if($A.get("e.force:createRecord")){
            component.set("v.showNewButton", true);
        }
    },
    handleSelect: function(component, event, helper){
        //получаю value выбранной опции
        component.set("v.boatTypeId", event.getSource().get("v.value"));
    },
    newBoatRecord: function(component, event, helper){
        let boatTypeId = component.get("v.boatTypeId");
        var createBoatEvent = $A.get("e.force:createRecord");
        createBoatEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'BoatType__c' : boatTypeId
            }
        });
        createBoatEvent.fire();
    },
    onFormSubmit: function(component, event, helper){
        let boatTypeId = component.get("v.boatTypeId");
        let createEvent = component.getEvent("formsubmit");
        console.log("selectedType in formHelper" + boatTypeId);
        createEvent.setParams({ "formData" : boatTypeId });
        createEvent.fire();
    }
});
