public with sharing class CadastraClienteController {
   

@AuraEnabled public static String  createCliente(String nome, String cpf, Double rg,
String endereco, Decimal telefone){ 
    ClientesFloricultura__c cliente = new ClientesFloricultura__c();
    cliente.Nome__c = nome;
    cliente.CPF__c = cpf;
    cliente.RG__c = rg;
    cliente.Endereco__c = endereco;
    cliente.Telefone__c = telefone;
    
    insert cliente;
    return 'Cliente cadastrado com sucesso!';
}
/* @AuraEnabled
public static void createCliente(ClientesFloricultura__c cliente){
    insert cliente;
} */

}