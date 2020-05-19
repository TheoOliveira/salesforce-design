import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne;
    numberTwo;

    eventChanger(event) { // deals with the number changing and the different input
        let val = event.target.value; // change value
        let name = event.target.name; // event's name
        if(name === 'numberOne'){
            this.numberOne = val;
        }else{
            this.numberTwo = val;
        }
    }

    doSum() {

    }

    doSub() {

    }
}