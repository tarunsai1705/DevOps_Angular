import { Injectable } from "@angular/core";
import { Register, Registers } from "./register";
@Injectable({
    providedIn:'root',
})
export class RegisterService{
    private people:Registers[]=[
        {
            firstName:"Tarun Sai",
            lastName:"Pamulapati",
            email:"tarun@gmail.com",
            mobile:"9089786756",
            password:"tarun123"
        },
        {
            firstName:"Sekhar",
            lastName:"Choppala",
            email:"sekhar@gmail.com",
            mobile:"7890678956",
            password:"sekhar@123"
        },
        {
            firstName:"Laharsh",
            lastName:"Moturi",
            email:"laharsh@gmail.com",
            mobile:"8907896789",
            password:"laharsh@123"
        },
        {
            firstName:"Tarun Reddy",
            lastName:"Makireddy",
            email:"tarunr@gmail.com",
            mobile:"8765456789",
            password:"tarunr@123"
        },
        {
            firstName:"Mohan Krishna",
            lastName:"Sopparapu",
            email:"mohan@gmail.com",
            mobile:"7995765902",
            password:"mohan@123"
        }
    ]
    getUsers():Register[]{
        return this.people;
    }
    
}
