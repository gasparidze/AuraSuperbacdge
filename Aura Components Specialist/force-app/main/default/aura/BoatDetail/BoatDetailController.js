({
    init : function(component, event, helper) {
        var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        if(redirectToSObjectPageEvent){
            component.set("v.displaybutton",true);
        }  
    },
    onFullDetails: function(component, event, helper){
        let id = component.get("v.boat.Id");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": id
        });
        navEvt.fire();
    }
})