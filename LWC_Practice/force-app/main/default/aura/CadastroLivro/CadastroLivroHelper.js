({
    enviaLivro : function(component) {
    const action = component.get('c.criaLivro');

    //Atributos
    let autor = component.get('v.autor');
    let titulo = component.get('v.titulo');
    let quantidade = component.get('v.quantidade');
    console.log('chegou helper', autor, titulo, quantidade);
    //set params
    action.setParams({
        'autor': autor,
        'titulo': titulo,
        'quantidade': quantidade
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
