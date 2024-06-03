import axios from 'axios';

export class ContactServices {
    static serverURL = `http://localhost:9000`;

    static getAllContacts() {
        let dataURL = `${this.serverURL}/contacts`; // Use backticks for string interpolation
        return axios.get(dataURL);
    }
}
