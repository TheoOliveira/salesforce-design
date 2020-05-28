public with sharing class Compra2 {
    public ClienteFloricultura2 cliente = new ClienteFloricultura2();
    public List<ItemCompra2> item = new List<ItemCompra2>();
    public Id CompraId{get; set;}
    public Date DataCompra {get; set;}
    public List<String> StatusCompra {get; set;}
    public Double TickeMedio {get; set;}
    public Double ValorTotalCompras {get; set;}

   
}
