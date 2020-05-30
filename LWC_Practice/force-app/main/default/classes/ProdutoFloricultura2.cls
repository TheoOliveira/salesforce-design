
public with sharing class ProdutoFloricultura2 {
    public Id produtoId{get; set;}
    public String produto {get; set;}
    public String categoriaItem{get; set;}
    public Double estoque {get; set;}
    public Double preco {get; set;}
    public ProdutosFloricultura__c produtoObj{get; set;}
  
public ProdutoFloricultura2(ProdutosFloricultura__c produtoObj){
    produtoId = produtoObj.Name;
    categoriaItem = produtoObj.Categoria__c;
    estoque = produtoObj.Estoque__c;
    preco = produtoObj.Preco__c;
    
}

}