import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartservice } from '../cart/cart.service';
import { Kitchen } from '../kitchenitems/kitchen';
import { KitchenService } from '../kitchenitems/kitchenitem.service';
import { Loginservice } from '../login/login.service';

@Component({
  selector: 'app-itemslogin',
  templateUrl: './itemslogin.component.html',
  styleUrls: ['./itemslogin.component.css']
})
export class ItemsloginComponent implements OnInit {
  
  quantity:number=1;
  
  constructor(private route:Router,private kitchenservice:KitchenService,private logi:Loginservice ) { }
  _searchTerm:string;
  searchedFruits:Kitchen[];
  kitchens:Kitchen[]=[
    
  ]

  ngOnInit(): void {
    this.kitchens=this.kitchenservice.getFruits();
    this.searchedFruits=this.kitchens;
    
  }

  get searchTerm():string
  {  
    return this._searchTerm;
  }

set searchTerm(value:string)
{
this._searchTerm=value;
this.searchedFruits=this.searchTerm?this.searchFruit(this.searchTerm):this.kitchens;
}

searchFruit(searchby:string):Kitchen[]
{
    searchby=searchby.toLocaleLowerCase();
    return this.kitchens.filter((kitchens:Kitchen)=>kitchens.fruitName.toLocaleLowerCase().indexOf(searchby)!==-1);
}
plus(){
  this.quantity+=1;
}
minus(){
  this.quantity-=1;
}

addToCart(id)
    {
        if(this.logi.login){
        this.route.navigate(['./add-to-cart',id]);
        }
        else{
          this.route.navigate(['./login']); 
        }

    }    
    logout(){
      this.logi.login=0;
      this.route.navigate(['./kitchen']);

    }
}
