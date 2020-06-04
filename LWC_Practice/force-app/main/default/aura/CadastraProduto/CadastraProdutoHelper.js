({
    enviaProduto : function(component) {
        console.log('Chegou aqui helper');

        var action = component.get("c.createProduto");
        console.log(action);
        //attributes
        var nomeProduto = component.get("v.nomeProduto");
        var estoque = component.get("v.estoque");
        var categoriaProduto = component.get("v.categoriaProduto");
        console.log(action);
        //set params
    
        action.setParams({
          'nomeProduto': nomeProduto,
          'estoque': estoque,
          'categoriaProduto': categoriaProduto
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
    