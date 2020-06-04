({
    enviaCompra : function(component, event, helper) {
        console.log('Chegou aqui helper');

        var action = component.get("c.createCompra");
        console.log(action);
        //attributes
        var dataCompra = component.get("v.dataCompra");
        var clienteId = component.get("v.clienteId");
        var statusCompra = component.get("v.statusCompra");
        console.log(action);
        console.log(dataCompra);
        console.log(statusCompra);
        console.log(clienteId);

        //set params
    
        action.setParams({
          'dataCompra': dataCompra,
          'clienteId': clienteId,
          'statusCompra': statusCompra
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
    