({
    onSearch : function(component, event) {
        console.log("hello from results!!!");
        let action = component.get("c.getBoats");
        let boatTypeId = component.get("v.boatTypeId");
        console.log("selectedType=" + boatTypeId);
        action.setParams({
            "boatTypeId": boatTypeId
        });
        action.setCallback(this, function(response) {
        let state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.boats", response.getReturnValue());
            console.log("Boats=" + component.get("v.boats"));
        }
        else {
            console.log("Failed with state: " + state);
        }
        });
        $A.enqueueAction(action); 
    }
})
