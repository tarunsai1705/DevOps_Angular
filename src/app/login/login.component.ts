import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { Login, Logins } from './login';
import { Loginservice } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private regservice:RegisterService,private logi:Loginservice, private route:Router){}
  logins:Logins[];
  ngOnInit(): void 
    {
    this.logins=this.regservice.getUsers();
    }
    showMsg:Boolean=false;

    
    login=new Login();
    login_user(userForm:NgForm){
      let uid=this.login.email;
      let pass=this.login.password;
      let user:Login=this.getUser(uid);
      
      if(uid==user.email){
        if(pass==user.password){
          if(uid=="tarun@gmail.com"){
            this.logi.login=1;
            this.route.navigate(['./admin']);            
          }
          else{
            this.logi.login=1;
          this.route.navigate(['./itemslogin']);
          }
        }
        else{
          this.showMsg=true;
          // alert("Please provide correct details")
          this.route.navigate(['./login']);
        }
      }
    }
    getUser(uid:string):Login
    {
        const user=this.logins.find(user => user.email == uid);
            return user;
    }
    
}
