
public with sharing class ProdutoFloricultura2 {
    public Id produtoId{get; set;}
    public String nomeProduto {get; set;}
    public String categoriaItem{get; set;}
    public Double estoque {get; set;}
    public Double preco {get; set;}
  
public ProdutoFloricultura2(ProdutosFloricultura__c produto){

    produto.Name = produtoId;
    produto.Item__c = nomeProduto;
    produto.Categoria__c = categoriaItem;
    produto.Estoque__c = esotque;
    produto.Preco__c = preco;
    
}

}