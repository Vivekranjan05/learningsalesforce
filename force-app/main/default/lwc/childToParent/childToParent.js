import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    data = '';

    handleChange(event) {
        this.data = event.target.value;
    }

    sendData() {
        const sendEvent = new CustomEvent('datafromchild', {
            detail: this.data
        });
        this.dispatchEvent(sendEvent);
    }
}
