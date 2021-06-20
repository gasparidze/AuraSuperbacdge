({
    /**
     * поиск записей в БД
     * @param {*} component 
     */
    onSearch : function(component, event) {
        let boatName = component.get("v.boatName");
        let action = component.get("c.getBoats");
        action.setParams({
            "boatName": boatName
        });
        action.setCallback(this, function(response) {
        let state = response.getState();
        if (state === "SUCCESS") {
            let boats = response.getReturnValue();
            // после получения записей, проверяем пуста ли коллекция и в зависимости от этого устанавливаем 
            // параметр isEmpty на true или false
            let createEvent = $A.get("e.c:IsEmpty"); 
            if(boats.length == 0){
                createEvent.setParams({"isEmpty" : true});
            }else if(boats.length > 0){
                createEvent.setParams({"isEmpty" : false});
            }
            createEvent.fire();
            // переопределяем значение поля для корректного вывода столбца
            boats.forEach(function(item){
                if(item.BoatType__c){
                    item.BoatType__c = item.BoatType__r.Name;
                }
            });
            component.set("v.boats", boats);
        }
        else {
            var errors = response.getError();
            console.error(errors);
            console.log("Failed with state: " + state);
        }
        });
        $A.enqueueAction(action); 
    },
    /**
     * передаем выбранную запись в компоненты детального описания и карты
     * @param {*} selectedBoat - выбранная запись
     */
    showDetails: function(selectedBoat){
        let createBoatSelectedEvent = $A.get("e.c:BoatSelected");
        createBoatSelectedEvent.setParams({ "boat": selectedBoat });
        createBoatSelectedEvent.fire();

        let createMapEvent = $A.get("e.c:PlotMapMarker");
        createMapEvent.setParams({ 
            "sObjectId": selectedBoat.Id,
            "lat" : selectedBoat.Geolocation__Latitude__s,
            "long" : selectedBoat.Geolocation__Longitude__s,
            "label" : selectedBoat.Name,
        });
        createMapEvent.fire();
    }
    
})
