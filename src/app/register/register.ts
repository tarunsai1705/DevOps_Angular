export class Register{
    constructor(public firstName="", public lastName="",public email="", public mobile="",public password=""){

    }
}
export interface Registers{
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    password:string;
}