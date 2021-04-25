import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showMsg: boolean = false;
  constructor(private route:Router){}
  register=new Register();
  save(userForm:NgForm){
      this.showMsg= true;
    this.route.navigate(['/register']);
  }
  

}
