import { Injectable } from "@angular/core";
import { Kitchen } from "./kitchen";

@Injectable({
    providedIn:'root',
})
export class KitchenService{
    private fruits:Kitchen[]=[
        {
            fruitID:1,
            fruitName:"Apple",
            fruitSrc:"./assets/images/apples.jpg",
            fruitCategory:"Fruits",
            fruitRate:50
      
          },
          {
            fruitID:2,
            fruitName:"StrawBerry",
            fruitSrc:"./assets/images/straw.jpg",
            fruitCategory:"Fruits",
            fruitRate:100
      
          },
          {
            fruitID:3,
            fruitName:"Grapes",
            fruitSrc:"./assets/images/grapes.png",
            fruitCategory:"Fruits",
            fruitRate:70
      
          },
          {
            fruitID:4,
            fruitName:"oranges",
            fruitSrc:"./assets/images/oranges.jpg",
            fruitCategory:"Fruits",
            fruitRate:100
      
          },
          {
            fruitID:5,
            fruitName:"Spinach",
            fruitSrc:"./assets/images/spinach.jpg",
            fruitCategory:"Vegetables",
            fruitRate:20
      
          },
          {
            fruitID:6,
            fruitName:"Cabbage",
            fruitSrc:"./assets/images/cabbage.jpg",
            fruitCategory:"Vegetables",
            fruitRate:40
      
          },
          {
            fruitID:7,
            fruitName:"Tomato",
            fruitSrc:"./assets/images/tomato.jpg",
            fruitCategory:"vegetables",
            fruitRate:30
      
          },
          {
            fruitID:8,
            fruitName:"Brinjal",
            fruitSrc:"./assets/images/brinjal.jpg",
            fruitCategory:"vegetables",
            fruitRate:25
      
          }
      
    ];
    getFruits():Kitchen[]{
        return this.fruits;
    }
    getFruit(id:number):Kitchen
    {
        const fruit=this.getFruits().find(fruit => fruit.fruitID === id);
            return fruit;
    }
}

