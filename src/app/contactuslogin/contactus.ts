export class Contact{
    constructor(public name="",public mail="", public subject="",public message=""){

    }
}
export interface Contacts{
    name:string;
    mail:string;
    subject:string;
    message:string;
}