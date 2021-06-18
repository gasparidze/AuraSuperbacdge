({
    onFormSubmit : function(component, event, helper) {
        console.log("helloWorld");
        let boatTypeId = event.getParam("formData");
        console.log("boatTypeId in boat search= "  + boatTypeId);
        component.set("v.boatTypeId", boatTypeId);
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if(boatSearchResultsCmp){
            console.log("in boarSearchResultsCMP")
            boatSearchResultsCmp.search(boatTypeId);
        }
    }
})
