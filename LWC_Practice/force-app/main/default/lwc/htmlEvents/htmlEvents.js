import { LightningElement } from 'lwc';

export default class HtmlEvents extends LightningElement {
    //basic string attribute
    message = 'welcome';
    isFirst = false;
    isSecond = false;
    //function
    handleChange(event) {
        let val = event.target.value;
        console.log('value is', val);
    }

    clickMe() {
        alert('click!')
    }

    showImage(event) {
        let val = event.target.value;
        if (val == 'First Image') {
            this.isFirst = true;
            this.isSecond = false;
        } if (val == 'Second Image') {
            this.isSecond = true;
            this.isFirst = false;
        }
    }

    // data for iteration
    contacts = [
        {
        Id: 1,
        Name: "User One",
        Email: "user@email.com"
    }, 
    {
        Id: 2,
        Name: "User Two",
        Email: "userdois@email.com"
    }, 
    {
        Id: 3,
        Name: "User Three",
        Email: "userthree@email.com"
    }
]
}