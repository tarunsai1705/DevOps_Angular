import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginservice } from '../login/login.service';
import { Price } from './cart';
import { Cartservice } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService :Cartservice, private route:Router,private logi:Loginservice) { }
  value:number=1;
  items:Price[];
  final_price:number;
  overall:number=0;
  ngOnInit(): void 
  {
    this.items=this.cartService.getItems();
    this.overall+=this.cartService.gerOverall();
  }

  find(name){
    let y=this.items.find(fruit => fruit.fruitName == name);
    return y.fruitRate;
  }
  onClick(){
    this.route.navigate(['./payment',this.overall]);
    this.items=this.cartService.clearCart();
    this.overall=this.cartService.clearOverall();
    
  }
  clearCart() {
    this.items = [];
    this.items=this.cartService.clearCart();
    this.overall=this.cartService.clearOverall();
   
  }
  logout(){
    this.logi.login=0;
    this.route.navigate(['./kitchen']);

  }

}
