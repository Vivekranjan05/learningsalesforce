import { LightningElement, track } from 'lwc';
import saveData from '@salesforce/apex/childToParent.saveData';

export default class ParentComponent extends LightningElement {
    @track receivedData = '';

    handleChildData(event) {
        this.receivedData = event.detail;
    }

    sendToServer() {
        saveData({ inputData: this.receivedData })
            .then(result => {
                console.log('Apex response: ', result);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }
}
