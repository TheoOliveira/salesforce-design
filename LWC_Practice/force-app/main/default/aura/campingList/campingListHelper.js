({
    createItem : function(component, item) {
        //call apex controller method
        const action = component.get('c.saveItem');

        //set params
        action.setParams({
            'item' : item
        });
        action.setCallback(this, (response)=>{
            let state = response.getState();
            if(state === 'SUCCESS'){
                let items = component.get('v.items');
                items.push(response.getReturnValue());
                component.set('v.items', items);
            }
        });
        $A.enqueueAction(action);
    }
})
