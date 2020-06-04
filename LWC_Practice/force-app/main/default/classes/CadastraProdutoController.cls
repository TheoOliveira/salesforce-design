public with sharing class CadastraProdutoController {
    
    @AuraEnabled
    public static void createProduto(String nomeProduto, Double preco,
     Double estoque, String categoriaProduto){
        ProdutosFloricultura__c produto = new ProdutosFloricultura__c();
        produto.Item__c = nomeProduto;
        produto.Categoria__c = categoriaProduto;
        produto.Preco__c = preco;
        produto.Estoque__c = estoque;

        insert produto;
    }
}
