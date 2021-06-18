({
    onFormSubmit : function(component, event, helper) {
        let boatName = event.getParam("boatName");
        component.set("v.boatName", boatName);
        console.log("in boatSearch  " + component.get("v.boatName"));
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if(boatSearchResultsCmp){
            boatSearchResultsCmp.search(boatName);
        }
    }
})
