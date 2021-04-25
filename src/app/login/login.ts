export class Login{
    constructor(public firstName="", public lastName="",public email="", public mobile="",public password=""){

    }
}
export interface Logins{
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    password:string;
}