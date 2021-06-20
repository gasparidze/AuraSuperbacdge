({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },
    onSave: function(component, event, helper){
        var recordLoader = component.find("service"); 
        recordLoader.saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                var toastEvent = $A.get("e.force:showToast");
                if(toastEvent != undefined){
                    toastEvent.setParams({
                        "type": "success",
                        "title": "Success!",
                        "message": "The record has been saved successfully."
                    });
                    toastEvent.fire();
                    helper.onInit(component);
                    let createEvent = component.getEvent("boatReviewAdded");
                    createEvent.fire();
                }else{
                    alert("The record has been saved successfully.");
                }

            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
                
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' +
                           JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }))
    },
    onRecordUpdated: function(component, event, helper){

    }
})
