export class Admin{
    constructor(public firstName="", public lastName="",public email="", public mobile="",public password=""){

    }
}
export interface Admin_i{
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    password:string;
}