({
    createExpense : function(component, newExpense) {
        // get the event
        let createEvent = component.getEvent('createExpense');
        //set the parameters for the expense and start the event
        createEvent.setParams({'expense': newExpense});
        createEvent.fire();
    }
})
