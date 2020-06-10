public with sharing class DevolucaoController {
   
   
   
@AuraEnabled
   public static void criaDevolucao(String emprestimo){
       Emprestimo__c emprestimoObj = new Emprestimo__c();
       ItemEmprestimo__c itemEmprestimo = new ItemEmprestimo__c();
       emprestimoObj = [SELECT Id, DataDevolucao__c FROM Emprestimo__c WHERE Id =: emprestimo];
       emprestimoObj.DataDevolucao__c = Date.today();
       itemEmprestimo = [SELECT Id, Livro__c, Emprestimo__c, QuantidadeEmprestada__c FROM ItemEmprestimo__c WHERE Emprestimo__c =: emprestimoObj.Id];
       itemEmprestimo.QuantidadeEmprestada__c = 0;
       System.debug(emprestimo);
       System.debug(itemEmprestimo.QuantidadeEmprestada__c);
       upsert emprestimoObj;
       upsert itemEmprestimo;
       }
   }

