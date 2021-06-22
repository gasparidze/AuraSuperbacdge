({
    /**
     * Обработчик event'а, передающий нужные данные при нажатии на Search
     * @param {*} component 
     * @param {*} event 
     */
    onFormSubmit: function (component, event) {
        // устанавливаем флаг на true, сигнализируя, что кнопка нажата 
        component.set("v.isSearch", true);
        //принимаем название лодки и устанавливаем ее в соответствующий атрибут для дальнейшей передачи
        let boatName = event.getParam("boatName");
        component.set("v.boatName", boatName);
        let boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        if (boatSearchResultsCmp) {
            //запускам метод search в компоненте BoatSearchResult, передавая название лодки 
            boatSearchResultsCmp.search(boatName);
        }
    }
})
