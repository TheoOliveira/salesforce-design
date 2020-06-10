public with sharing class ItemEmprestimoController {
    
    @AuraEnabled
    public static void criaItemEmprestimo(String livro, String emprestimo, Integer quantidade){

        ItemEmprestimo__c itemEmprestimo = new ItemEmprestimo__c();
        itemEmprestimo.Emprestimo__c = emprestimo;
        itemEmprestimo.Livro__c = livro;
        itemEmprestimo.QuantidadeEmprestada__c = quantidade;

        insert itemEmprestimo;
        
    }
}
