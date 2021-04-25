import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitchenService } from '../admin-items/admin-items.services';
import { Kitchen } from '../kitchenitems/kitchen';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  pgtitle:string="";
  fruits:Kitchen;
  constructor(private route:Router, private aroute:ActivatedRoute,private fruitservice:KitchenService)
    {

    
    }

  ngOnInit(): void {
        let id= +this.aroute.snapshot.paramMap.get('id');
        this.fruits=this.fruitservice.getFruit(id);
  }
  goback()
    {
        this.route.navigate(['/admin-items']);
    }

    onDelete(id:number){
      if(window.confirm("Are you sure to delete it ??")){
      this.fruitservice.deleteFruit(id);
      this.route.navigate(['./admin-items']);
      }
  }

}
