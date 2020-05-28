public with sharing class ItemCompra2 {
    Id ItemCompraId{get; set;}
    String NomeItem{get; set;}
    List<String> CategoriaItem = new List<String>();
    Double PrecoItem{get; set;}
    Integer QuantidadeItem{get; set;}
    Double ValorTotal{get; set;}
    List<ProdutoFloricultura2> itens = new List<ProdutoFloricultura2>();
  
}
