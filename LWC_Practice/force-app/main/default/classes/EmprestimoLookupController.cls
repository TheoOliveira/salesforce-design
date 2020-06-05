public with sharing class EmprestimoLookupController {
    

    @AuraEnabled
    public static List<ItemEmprestimo__c> pegaValoresLookup(String searchWord, String objName){
        System.debug('Object - ' + objName);
        String searchKey = searchWord + '%';

        List<sObject> retornoLista = new List<sObject>();

        // SOQL query
        String query = 'SELECt Id, Titulo__c FROM ' +objName+ 'where Titulo__c LIKE: searchKey ORDER BY createdDate DESC LIMIT 5';
        List<sObject> listaRecords = Database.query(query);

        for (sObject obj : listaRecords) {
                retornoLista.add(obj);
        }
        return retornoLista;
    }
}
