({
  enviaItemCompra: function(component) {
    console.log("Chegou aqui helper");

    var action = component.get("c.createItemCompra");
    console.log(action);
    //attributes
    var compraId = component.get("v.compraId");
    var quantidade = component.get("v.quantidade");
    var produtoId = component.get("v.produtoId");

    console.log(action);
    console.log(compraId);
    console.log(quantidade);
    console.log(produtoId);

    //set params

    action.setParams({
      'compraId': compraId,
      'quantidade': quantidade,
      'produtoId': produtoId
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
            message: data,
            type: "error",
            mode: "sticky"
          })
          .fire(); */
      } else {
        /* $A.get("e.force:showToast")
          .setParams({
            message: response.getError()[0].message,
            type: "error",
            mode: "sticky"
          })
          .fire(); */
      }
    });
    $A.enqueueAction(action);
  }
});
