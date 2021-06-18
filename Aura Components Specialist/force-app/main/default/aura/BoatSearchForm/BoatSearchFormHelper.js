({
    loadTypes: function(component){
        let action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response) {
        let state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.options", response.getReturnValue());
        }
        else {
            console.log("Failed with state: " + state);
        }
        });
        $A.enqueueAction(action); 
    },
})
