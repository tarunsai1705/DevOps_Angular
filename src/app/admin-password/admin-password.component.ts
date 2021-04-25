import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { Admin, Admin_i } from './admin-password';
@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.css']
})
export class AdminPasswordComponent implements OnInit {
  constructor(private regservice:RegisterService, private route:Router){}
  admin_i:Admin_i[];
  admin=new Admin();
  new_pass:string;
  r_new_pass:string;
  showMsg:boolean=false;
  showMsg1:boolean=false;
  showMsg2:boolean=false;
  ngOnInit(): void {
    this.admin_i=this.regservice.getUsers();
  }
  Pass_change(userForm:NgForm){
    // alert(this.admin.password);
    // alert(this.new_pass);
    // alert(this.r_new_pass);
    let user:Admin=this.getUser("tarun@gmail.com");
    if(user.password==this.admin.password){
      if(this.new_pass==this.r_new_pass){
        this.showMsg2=true;
        this.showMsg=false;
        this.showMsg1=false;
        this.route.navigate(['./admin-password']);
      }
    }
    else{
      this.showMsg=true;
      this.route.navigate(['./admin-password']);
    }
  }
  getUser(uid:string):Admin
    {
        const user=this.admin_i.find(user => user.email == uid);
            return user;
    }
    onClick(){
      this.route.navigate(['./admin']);

    }

}
