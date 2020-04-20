public with sharing class  AccountUtils{
    public List<Account> accountsByState(String state){
        List<Account> listaContas = [SELECT Id, Name from Account WHERE billingState = :state];
        return listaContas;
    }
}