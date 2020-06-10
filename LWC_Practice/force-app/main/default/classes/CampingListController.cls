public with sharing class CampingListController {
    

    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
       List<Camping_Item__c> query = [SELECT Id, Name, Packed__c, Price__c, Quantity__c FROM Camping_item__c];
        return query;
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item){
        upsert item;
        return item;
    }

}
