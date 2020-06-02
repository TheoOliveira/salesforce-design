
public with sharing class Compra2 
{
   
    public Id compraId{get; set;}
    public Date dataCompra {get; set;}
    public String statusCompra {get; set;}
    public Double ticketMedio {get; set;}
    public Double valorTotalCompras {get; set;}
    public Double numberoItens {get; set;}
    //SObjects
    public Compra__c compra {get; set;}
    public List<ItemCompra2> lista {get; set;}

public Compra2(Compra__c compraObj)
{
    compraId = compraObj.Name;   
    dataCompra = compraObj.Data_Compra__c;
    statusCompra = compraObj.Status_da_Compra__c;
    ticketMedio = compraObj.Ticket_Medio__c;
    valorTotalCompras = compraObj.Valor_Total_da_Compra__c;
    numberoItens = compraObj.Numero_de_Itens_Comprados__c;
    lista = new List<ItemCompra2>();    
}

public void addItem()     // adicionar item da Lista ou dar update
{
    
}
    


public void checkStatus()
{ 
    if(numberoItens == 0 ){
        statusCompra == 'Novo';
    }else if (numberoItens == 1){
        statusCompra == 'Em negociação';
    }
}

public void checkApprovalPermit(){
    try {
        statusCompra == 'Novo' && isSubmmit == true;
    } catch (Exception e) {
        System.debug('Não é permitido envio para aprovação sem Produto.');
    }
}

}