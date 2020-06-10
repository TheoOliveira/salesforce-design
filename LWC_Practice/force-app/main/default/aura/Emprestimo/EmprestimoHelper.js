({
    enviaEmprestimo : function(component) {
        const action = component.get('c.criaEmprestimo');

        //atributos
        let nomeLeitor = component.get('v.selectedLookUpRecordLeitor').Id;
        let nomeLivro = component.get('v.selectedLookUpRecordLivro').Id;
        let quantidade = component.get('v.quantidade');

        console.log(nomeLeitor);
        console.log(nomeLivro);
        console.log(quantidade);

        //set params

        action.setParams({
            'nomeLivro': nomeLivro,
            'nomeLeitor' : nomeLeitor,
            'quantidade' : quantidade
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
    
