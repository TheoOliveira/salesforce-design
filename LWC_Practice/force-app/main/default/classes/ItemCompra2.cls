
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

    
public void addProd()
{
    try {
        insuficienteEstoque = true;
    } catch (Exception e) {
        System.debug('Não é possivel adicionar este produto. Sem Estoque.');
    }

}
public void checkQuantidade()
{
    if (produto.estoque == quantidadeItem || produto.estoque == 0) {
        insuficienteEstoque = true;
    }else if (quantidadeItem < produto.estoque){
        insuficienteEstoque = false;
    }

}

public void updateEstoque()
{ 
// ao adicionar produto da update no estoque.
}

}
