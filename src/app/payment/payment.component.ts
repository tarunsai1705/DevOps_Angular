import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartservice } from '../cart/cart.service';
import { Loginservice } from '../login/login.service';
import { payment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  overall:number=0;

  constructor(private aroute:ActivatedRoute, private cartService :Cartservice, private route:Router,private logi:Loginservice) { }
  payment=new payment();
  
  ngOnInit(): void {
    let id= +this.aroute.snapshot.paramMap.get('id');
    
    this.overall+=id;
  }
  goBack(){
    this.route.navigate(['./itemslogin']);
  }
  onClick(){
    
    this.route.navigate(["./success"]);
    this.overall=0;
  }

}
