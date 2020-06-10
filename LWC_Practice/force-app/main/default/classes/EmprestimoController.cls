public with sharing class EmprestimoController {
    
    @AuraEnabled
    public static void criaEmprestimo(String nomeLeitor, String nomeLivro, Date dataDevolucao, Integer quantidade){
        Emprestimo__c emprestimo = new Emprestimo__c();
        ItemEmprestimo__c itemEmprestimo = new ItemEmprestimo__c();
        Date dataEmprestimo = Date.today();
        emprestimo.Leitor__c = nomeLeitor;
        emprestimo.DataEmprestimo__c = dataEmprestimo;
        emprestimo.DataDevolucao__c = dataDevolucao;
        insert emprestimo;
        if(emprestimo.Id != null){
            itemEmprestimo.Livro__c = nomeLivro;
            itemEmprestimo.Emprestimo__c = emprestimo.Id;
            itemEmprestimo.QuantidadeEmprestada__c = quantidade;
            insert itemEmprestimo;    
        }
        
    }
        
}