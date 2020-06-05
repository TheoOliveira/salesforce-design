({
    enviaEmprestimo : function(component) {
        const action = component.get('c.criaEmprestimo');

        //atributos
        let nomeLeitor = component.get('v.nomeLeitor');
        let dataEmprestimo = component.get('v.dataEmprestimo');

        //set params

        action.setParams({
            'nomeLeitor' : nomeLeitor,
            'dataEmprestimo' : dataEmprestimo
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
    
