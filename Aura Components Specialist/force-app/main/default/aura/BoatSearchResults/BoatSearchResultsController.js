({
    doInit : function(component, event, helper) { 
        helper.onSearch(component, event);
    },
    doSearch: function(component, event, helper){
        var params = event.getParam('arguments');
        if(params){
            var param1 = params.param1;
            component.set("v.boatTypeId", param1);
            helper.onSearch(component);
        }
    },
    onBoatSelect: function(component, event, helper){
        var boatId = event.getParam('boatId');
        component.set("v.selectedBoatId", boatId);
    }
})
