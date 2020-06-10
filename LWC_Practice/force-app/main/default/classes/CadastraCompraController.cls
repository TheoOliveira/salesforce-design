public with sharing class CadastraCompraController {
    
    @AuraEnabled
    public static void createCompra(Date dataCompra, Id clienteId,  String statusCompra ){
        Compra__c compra = new Compra__c();
        compra.Data_Compra__c = dataCompra;
        compra.Status_da_Compra__c = statusCompra;
        compra.ClienteFloricultura__c = clienteId;
        System.debug(dataCompra);
        System.debug(statusCompra);
        System.debug(clienteId);

        insert compra;
    }
}
