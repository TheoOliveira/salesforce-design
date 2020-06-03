
public with sharing class Compra2 
{
   
    public Id compraId{get; set;}
    public Date dataCompra {get; set;}
    public String statusCompra {get; set;}
    public Double ticketMedio {get; set;}
    public Double valorTotalCompras {get; set;}
    public Double numeroItens {get; set;}
    //SObjects
    public List<ItemCompra2> lista {get; set;}

public Compra2(Compra__c compraObj)
{
    compraId = compraObj.Id;   
    dataCompra = compraObj.Data_Compra__c;
    statusCompra = compraObj.Status_da_Compra__c;
    ticketMedio = compraObj.Ticket_Medio__c;
    valorTotalCompras = compraObj.Valor_Total_da_Compra__c;
    numeroItens = compraObj.Numero_de_Itens_Comprados__c;
    lista = new List<ItemCompra2>();    
}
public class Compra2Exception extends Exception {}

public void addItemList(ItemCompra2 compra){
    lista.add(compra);
} 
    


/* public void checkStatus()
{ 
    if(numeroItens == 0 ){
        statusCompra = 'Novo';
    }else if (numeroItens >= 1){
        statusCompra = 'Em negociação';
    }
} */

public String checkApprovalPermit(){
            if(statusCompra == 'Novo' && numeroItens >= 1 )
            statusCompra = 'Em aprovação';
            return statusCompra; 
            throw new Compra2Exception('Aprovação não pode ser efetivada'); 
    

}
}