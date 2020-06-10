(
    
    {
    clickCreate: function(component, event, helper) {
        const validExpense = component.find('expenseform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            const expense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, expense);
        }
    }
})

({
doInit: function(component, event, helper){
    const action = component.get('c.getExpenses');
    
    //set callback
    action.setCallback(this, (response)=>{
        let state = response.getState();
        if(state === "SUCCESS"){
            component.set('v.expenses', response.getReturnValue());
        }
        else{
            console.log("Failed with state: " +state);
        } 
    });

    $A.enqueueAction(action);
}})