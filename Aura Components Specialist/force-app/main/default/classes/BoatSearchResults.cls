public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatName){
        String newSearchText = ''+boatName+'%';
        if((boatName != null) && (boatName != '') && (boatName != 'undefined')){
            return [SELECT Name, Contact__c, BoatType__c, BoatType__r.Name, Picture__c, Price__c, Length__c, Geolocation__Latitude__s, Geolocation__Longitude__s FROM Boat__c WHERE Name LIKE :newSearchText];    
        }else {
            return [SELECT Name, Contact__c, BoatType__c, BoatType__r.Name, Picture__c, Price__c, Length__c, Geolocation__Latitude__s, Geolocation__Longitude__s FROM Boat__c];  
        }
    }
}
