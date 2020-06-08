public with sharing class LeitorLookupController {
   


    @AuraEnabled
    public static void salvaLeitor(Leitor__c leitor){
        insert leitor;
    }
}
