({
    onInit : function(component) {
        let action = component.get("c.getAll");
        let boatId = component.get("v.boat").Id; 
        action.setParams({
            "boatId": boatId 
        });
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boatReviews", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);   
    }

})
