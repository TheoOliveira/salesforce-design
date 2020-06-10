public with sharing class CadastraItemCompraController {
    @AuraEnabled
    public static void createItemCompra(String compraId, Double quantidade, String produtoId){
        ItemCompra__c itemCompra = new ItemCompra__c();
        itemCompra.ProdutoFloricultura__c = produtoId;
        itemCompra.Quantidade_do_Item__c = quantidade;
        itemCompra.Compra__c = compraId;

        insert itemCompra;
    }
}
