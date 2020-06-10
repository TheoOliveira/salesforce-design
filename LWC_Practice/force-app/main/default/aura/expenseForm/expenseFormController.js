({
    clickCreate: function(component, event, helper) {
        const validExpense = component
          .find("expenseform")
          .reduce(function(validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get("v.validity").valid;
          }, true);
        // If we pass error checking, do some real work
        if (validExpense) {
          // Create the new expense
          const expense = component.get("v.newExpense");
          helper.createExpense(component, expense);
          let defaultItem = {
            sobjectType: "Expense__c",
            Name: "",
            Amount__c: 0,
            Client__c: "",
            Date__c: "",
            Reimbursed__c: false
          };
          component.set("v.newExpense", defaultItem);
        }
      }
})
