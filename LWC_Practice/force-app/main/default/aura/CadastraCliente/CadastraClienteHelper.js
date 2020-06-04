({
  enviar: function(component, event) {
    console.log('Chegou aqui helper');

    var action = component.get("c.createCliente");
    //attributes
    var nome = component.get("v.nome");
    var cpf = component.get("v.cpf");
    var rg = component.get("v.rg");
    var endereco = component.get("v.endereco");
    var telefone = component.get("v.telefone");
    console.log('nome', nome);
    //set params

    action.setParams({
      'nome': nome,
      'cpf': cpf,
      'rg': rg,
      'endereco': endereco,
      'telefone': telefone
    });

    component.set("v.showSpinner", true);

    action.setCallback(this, function(response) {
      component.set("v.showSpinner", false);
      var state = response.getState();
      console.log(state);
      if (state === "SUCCESS") {
        var data = response.getReturnValue();

        /* $A.get("e.force:showToast")
                    .setParams({
                        "message":  data,
                        "type":     'error',
                        "mode":     'sticky'})
                    .fire(); */
      } else {
          /* $A.get("e.force:showToast")
                .setParams({
                    "message":  response.getError()[0].message,
                    "type":     'error',
                    "mode":     'sticky'})
                .fire(); */
      }
    });
    $A.enqueueAction(action);
  }
});
