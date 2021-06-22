({
    /**
     * Метод, инициализирующий столбцы для вывода таблицы.
     * @param {*} component
     */
    doInit: function (component) {
        component.set('v.columns', [
            { label: 'Boat Name', fieldName: 'Name', type: 'text' },
            { label: 'Type', fieldName: 'BoatType__c', type: 'text' },
            { label: 'Length', fieldName: 'Length__c', type: 'number' },
            { label: 'Est. Price', fieldName: 'Price__c', type: 'currency', typeAttributes: { currencyCode: 'USD', maximumSignificantDigits: 5 } },
            { label: 'View', type: 'button', initialWidth: 135, typeAttributes: { label: 'View Details', name: 'view_details', title: 'Click to View Details' } }
        ]);
    },
    /**
     * Метод, осуществляющий поиск записей по извлеченному названию
     * @param {*} component 
     * @param {*} event 
     * @param {*} helper 
     */
    doSearch: function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.param1;
            component.set("v.boatName", param1);
            helper.onSearch(component);
        }
    },
    /**
     * Получаем выбранную запись и передаем ее для вывода в компоненте детального описания
     * @param {*} event 
     * @param {*} helper 
     */
    handleRowAction: function (component, event, helper) {
        // получаю запись из таблицы
        var selectedBoat = event.getParam('row');
        // вывожу детальное описание
        helper.showDetails(selectedBoat);
        // вывожу гелокацию
        helper.showMap(selectedBoat);
    }
})
