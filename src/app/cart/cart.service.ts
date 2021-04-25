import{Injectable} from '@angular/core';
@Injectable({
    providedIn:'root'
})

export class Cartservice {
    cart_items = [];
    overall:number=0;
  
    addToCart(items,y) {
      this.cart_items.push(items);
      this.overall+=y;
      
    }

    gerOverall(){
      return this.overall;
    }
    getItems() {
      return this.cart_items;
    }
  
    clearCart() {
      this.cart_items = [];
      
      return this.cart_items;
    }
    clearOverall(){
      this.overall=0;
      return this.overall;
      
    }

    
}

