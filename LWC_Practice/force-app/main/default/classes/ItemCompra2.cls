
public with sharing class ItemCompra2 
{
    public  Id itemCompraId{get; set;}
    public Double quantidadeItem{get; set;}
    public Double valorTotal{get; set;}
    public ProdutosFloricultura__c produto {get; set;}
    public ItemCompra__c itemCompra{get; set;}
    public Boolean insuficienteEstoque;

public ItemCompra2(ItemCompra__c itemcompraObj)
{
    itemCompraId = itemcompraObj.Name;
    quantidadeItem = itemcompraObj.Quantidade_do_Item__c;
    valorTotal = itemcompraObj.ValorTotal__c;
    produto = new ProdutosFloricultura__c();
}

    
public void addProd(ProdutosFloricultura__c prodId)
{
    let prodSelector = [SELECT Item__c, Preco__c, Estoque__c 
    FROM ProdutosFloricultura__c WHERE Id in :prodId];
    
    prodSelector = produto;
}

public Boolean checkQuantidade()
{
    if (produto.Estoque__c == quantidadeItem || produto.Estoque__c == 0) {
        insuficienteEstoque = true;
    }else if (quantidadeItem < produto.Estoque__c){
        insuficienteEstoque = false;
    }
return insuficienteEstoque;
}

public void updateEstoque()
{ 
// ao adicionar produto da update no estoque.
}

}
