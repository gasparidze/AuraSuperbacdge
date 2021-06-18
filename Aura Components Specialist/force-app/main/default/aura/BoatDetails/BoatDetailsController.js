({
    onBoatSelected : function(component, event, helper) {
        var boat = event.getParam("boat");
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();  
    },
    onRecordUpdated :function(component, event, helper){
        component.find("service").reloadRecord();  
        var reviewCmp = component.find("reviewCmp");
        if(reviewCmp){
            console.log("in boarSearchResultsCMP")
            reviewCmp.refresh();
        }
    },
    onBoatReviewAdded: function(component, event, helper){
        component.set('v.tabId', 'boatreviewtab');
        var reviewCmp = component.find("reviewCmp");
        if(reviewCmp){
            console.log("in boarSearchResultsCMP")
            reviewCmp.refresh();
        }
    }
})

