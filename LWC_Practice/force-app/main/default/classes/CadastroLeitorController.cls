public with sharing class CadastroLeitorController {
    
    @AuraEnabled
    public static void criaLeitor(String nome, String sobrenome, Integer idade, String rg){
        Leitor__c leitor = new Leitor__c();
        leitor.Nome__c = nome;
        leitor.Sobrenome__c = sobrenome;
        leitor.RG__c = rg;
        leitor.Idade__c = idade;

        insert leitor;
    }
}
