public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if((boatTypeId != null) && (boatTypeId != '') && (boatTypeId != 'All Types')){
            return [SELECT Name, Contact__c, BoatType__c, Picture__c, Geolocation__Latitude__s, Geolocation__Longitude__s FROM Boat__c WHERE BoatType__c = :boatTypeId];    
        }else {
            return [SELECT Name, Contact__c, BoatType__c, Picture__c, Geolocation__Latitude__s, Geolocation__Longitude__s FROM Boat__c];  
        }
    }
}
