public with sharing class CadastroLivroController {
   
    @AuraEnabled
    public static void criaLivro(String autor, Integer quantidade, String titulo){
        Livro__c livro = new Livro__c();
        livro.Autor__c = autor;
        livro.Quantidade__c = quantidade;
        livro.Titulo__c = titulo;

        insert livro;
    }
}
