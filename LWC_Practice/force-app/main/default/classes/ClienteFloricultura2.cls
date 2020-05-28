public with sharing class ClienteFloricultura2 {
    public Id ClienteId {get; set;}
    public String Nome {get; set;}
    public Integer CPF {get; set;}
    public Integer RG {get; set;}
    public String Endereco {get; set;}
    public Integer Telefone {get; set;}
    public List<Compra2> listaCompras = new List<Compra2>();

   
}