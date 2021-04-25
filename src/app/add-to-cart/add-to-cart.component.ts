import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kitchen } from '../admin-items/admin-items';
import { Cartservice } from '../cart/cart.service';
import { KitchenService } from '../kitchenitems/kitchenitem.service';
import { Loginservice } from '../login/login.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  items=[];
  fruits:Kitchen;
  quantity:number=1;
  y:number;
  showMsg: boolean = false;
  constructor(private logi:Loginservice,private route:Router, private aroute:ActivatedRoute,private fruitservice:KitchenService,private service:Cartservice) { }

  ngOnInit(): void {
    let id= +this.aroute.snapshot.paramMap.get('id');
    this.fruits=this.fruitservice.getFruit(id);
    
  }
  minus(){
    if(this.quantity>1){
    this.quantity-=1;}
  }
  plus(){
    
    this.quantity+=1;
  }
  goback()
    {
        this.showMsg=false;
        this.route.navigate(['/itemslogin']);
    }
  addToCart(){
    this.y=this.fruits.fruitRate*this.quantity;
    let item={
      fruitId:this.fruits.fruitID,
      fruitSrc:this.fruits.fruitSrc,
      fruitRate:this.fruits.fruitRate,
      fruitName:this.fruits.fruitName,
      fruitQuantity:this.quantity,
      final:this.y
    }
    this.service.addToCart(item,this.y);
    this.showMsg=true;
    this.route.navigate(['./add-to-cart',this.fruits.fruitID]);
    

    
  }
  logout(){
    this.logi.login=0;
    this.route.navigate(['./kitchen']);

  }


}
