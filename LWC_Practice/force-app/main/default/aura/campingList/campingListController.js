({
    doInit: function(component, event, helper) {
      // call apex controller
      const action = component.get("c.getItems");
  
      //set callback
      action.setCallback(this, response => {
        let state = response.getState();
        if (state === "SUCCESS") {
          console.log(state);
          component.set("v.items", response.getReturnValue());
        } else {
          console.log("Failed:" + state);
        }
      });
      $A.enqueueAction(action);
    }
  },
    {
  clickCreateItem: function(component, event, helper) {
    let validItem = component
      .find("itemform")
      .reduce(function(validSoFar, inputCmp) {
        // Displays error messages for invalid fields
        inputCmp.showHelpMessageIfInvalid();
        return validSoFar && inputCmp.get("v.validity").valid;
      }, true);
    // If we pass error checking, do some real work
    if (validItem) {
      // Create the new expense
      let item = component.get("v.newItem");
      helper.createItem(component, item);
      let defaultItem = {'sobjectType': 'Camping_Item__c', 'Name': '', 'Quantity__c': 0, 'Price__c':0, 'Packed__c' : false };
      component.set('v.newItem', defaultItem);
    }
  }
});


