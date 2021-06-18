({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },
    onUserInfoClick: function(component, event, helper){
        var dataUserId = event.target.getAttribute("data-userid");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": dataUserId
        });
        navEvt.fire();
    }
})
