({
    /**
     * Проверяю, поддерживается ли создание записи.
     * @param {*} component 
     */
    doInit : function(component) {
        if($A.get("e.force:createRecord")){
            component.set("v.showNewButton",true);
        }
    },
    /**
     * Метод, создающий запись с предустановленным значением Названия лодки
     * @param {*} component 
     */
    newBoatRecord: function(component){
        let boatName = component.get("v.boatName");
        var createBoatEvent = $A.get("e.force:createRecord");
        createBoatEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'Name' : boatName
            }
        });
        createBoatEvent.fire();
    },
    /**
     * При нажатии на Search, передает Название лодки, по которой извлекаются записи
     * @param {*} component 
     */
    onFormSubmit: function(component){
        let boatName = component.get("v.boatName");
        let createEvent = component.getEvent("formsubmit");
        createEvent.setParams({ "boatName" : boatName });
        createEvent.fire();
    },
    /**
     * Получаю значение флага, сигнализирующий, пуста ли коллекция или нет
     * @param {*} component 
     * @param {*} event 
     */
    handleIsEmptyEvent: function(component, event){
        let isEmpty = event.getParam("isEmpty");
        component.set("v.isEmpty", isEmpty);
        console.log("isEmptyGotParam= " + isEmpty);
        console.log("isEmpty= " + component.get("v.isEmpty"));
    }
});
