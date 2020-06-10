({
    clickCreateItem: function(component, event, helper) {
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new expense
            let item = component.get("v.newItem");
            let items = component.get('v.items');
            let newItem = JSON.parse(JSON.stringify(item));
            let defaultItem = {'sobjectType': 'Camping_Item__c', 'Name': '', 'Quantity__c': 0, 'Price__c':0, 'Packed__c' : false };
            items.push(newItem);
            component.set("v.items", items);
            component.set('v.newItem', defaultItem);
        }
    }
})