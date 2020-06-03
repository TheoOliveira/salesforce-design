
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
    itemCompraId = itemcompraObj.Id;
    quantidadeItem = itemcompraObj.Quantidade_do_Item__c;
    valorTotal = itemcompraObj.ValorTotal__c;
    
}

    
public void addProd(ProdutosFloricultura__c prod)
{
    prod = produto;
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
