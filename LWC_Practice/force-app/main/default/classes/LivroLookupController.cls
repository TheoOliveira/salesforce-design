public with sharing class LivroLookupController {
   
    @AuraEnabled
    public static void salvaLivro(Livro__c livroObj){
        insert livroObj;
    }
}
