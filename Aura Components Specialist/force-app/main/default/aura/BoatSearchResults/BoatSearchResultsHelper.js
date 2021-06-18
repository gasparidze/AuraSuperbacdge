({
    onSearch : function(component, event) {
    let boatName = component.get("v.boatName");
        let action = component.get("c.getBoats");
        action.setParams({
            "boatName": boatName
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
