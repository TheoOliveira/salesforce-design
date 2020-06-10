({
    enviaItemEmprestimo : function(component) {
    const action = component.get('c.criaItemEmprestimo');

    //Atributos
    let emprestimo = component.get('v.emprestimo');
    let livro = component.get('v.livro');
    let quantidade = component.get('v.quantidade');

    //set params
    action.setParams({
        'emprestimo': emprestimo,
        'livro': livro,
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
