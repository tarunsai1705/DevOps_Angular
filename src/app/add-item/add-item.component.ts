import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Kitchen } from '../admin-items/admin-items';
import { KitchenService } from '../admin-items/admin-items.services';
import { Kitchens } from "./add-item";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
    fruitID:number;
    fruitName:string;
    fruitSrc:string;
    fruitCategory:string;
    fruitRate:number;
    kitchens:Kitchen[]=[];
    showMsg:boolean=false;
    kitchen=new Kitchens();
  constructor(private fruitservice:KitchenService, private route:Router) { }

  ngOnInit(): void {
    this.kitchens=this.fruitservice.getFruits();
  }
  save(userForm:NgForm){
    alert("Form Submitted"+this.kitchen.fruitSrc);
  }
  onFruitAdd(userForm:NgForm){
    let a={
      fruitID:+this.kitchen.fruitID,
      fruitName:this.kitchen.fruitName,
      fruitSrc:this.kitchen.fruitSrc,
      fruitCategory:this.kitchen.fruitCategory,
      fruitRate:+this.kitchen.fruitRate,

    }
    this.kitchens.push(a);
    this.showMsg=true
    
    this.route.navigate(['./add-items']);    
  }
  onBack(){
    this.showMsg=false;
    this.route.navigate(['./admin-items']);
  }

}
