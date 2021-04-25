import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginservice } from '../login/login.service';
import { Contact, Contacts } from './contactus';

@Component({
  selector: 'app-contactuslogin',
  templateUrl: './contactuslogin.component.html',
  styleUrls: ['./contactuslogin.component.css']
})
export class ContactusloginComponent implements OnInit {

  constructor(private logi:Loginservice, private route:Router) { }

  ngOnInit(): void {
  }
  contacts:Contacts[];
  contact=new Contact();
  contact_form(userForm:NgForm){
   

  }

  logout(){
    this.logi.login=0;
    this.route.navigate(['./kitchen']);
  }


}
