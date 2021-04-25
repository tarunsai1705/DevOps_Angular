import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginservice } from '../login/login.service';

@Component({
  selector: 'app-aboutuslogin',
  templateUrl: './aboutuslogin.component.html',
  styleUrls: ['./aboutuslogin.component.css']
})
export class AboutusloginComponent implements OnInit {

  constructor(private logi:Loginservice,private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.logi.login=0;
    this.route.navigate(['./kitchen']);

  }

}
