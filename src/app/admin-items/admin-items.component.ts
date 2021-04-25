import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Kitchen } from './admin-items';
import { KitchenService } from './admin-items.services';

@Component({
  selector: 'app-admin-items',  
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css']
})
export class AdminItemsComponent implements OnInit {

  kitchens:Kitchen[]=[]
  constructor(private fruitservice:KitchenService) {

   }

  ngOnInit(): void {
    this.kitchens=this.fruitservice.getFruits();
  }

}
