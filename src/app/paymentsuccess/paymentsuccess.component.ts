import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginservice } from '../login/login.service';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {

  constructor(private logi:Loginservice,private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.logi.login=0;
    this.route.navigate(['./kitchen']);

  }

}
