import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginservice } from '../login/login.service';
import { Contact, Contacts } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private logi:Loginservice, private route:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  contacts:Contacts[];
  contact=new Contact();
  contact_form(userForm:NgForm){
   

  }

}
