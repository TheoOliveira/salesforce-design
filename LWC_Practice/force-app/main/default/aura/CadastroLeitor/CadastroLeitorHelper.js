({
    enviaLeitor : function(component) {
        const action = component.get('c.criaLeitor');

        //attributes
        let nome = component.get('v.nome');
        let sobrenome = component.get('v.sobrenome');
        let rg = component.get('v.rg');
        let idade = component.get('v.idade');

        //set params

        action.setParams({
            'nome': nome,
            'sobrenome': sobrenome,
            'rg': rg,
            'idade': idade
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
    