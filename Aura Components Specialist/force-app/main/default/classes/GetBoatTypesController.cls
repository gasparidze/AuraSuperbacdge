public with sharing class GetBoatTypesController {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        return [SELECT Name FROM BoatType__c];    
    }
}
