({
    /**
     * Обработчик event'а, передающий нужные данные при нажатии на Search
     * @param {*} component 
     * @param {*} event 
     */
    onFormSubmit : function(component, event) {
        // устанавливаем флаг на true, сигнализируя, что кнопка нажата 
        component.set("v.isSearch", true);
        let boatName = event.getParam("boatName");
        component.set("v.boatName", boatName);
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if(boatSearchResultsCmp){
            //запускам метод search в компоненте BoatSearchResult, передавая название лодки 
            boatSearchResultsCmp.search(boatName);
        }
    }
})
