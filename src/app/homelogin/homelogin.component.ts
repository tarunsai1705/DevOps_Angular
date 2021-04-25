import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginservice } from '../login/login.service';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css']
})
export class HomeloginComponent implements OnInit {

  constructor(private route:Router,private logi:Loginservice) { }

  ngOnInit(): void {
  }
  logout(){
    this.logi.login=0;
    this.route.navigate(['./kitchen']);

  }

}
