import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutusloginComponent } from './aboutuslogin/aboutuslogin.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AdminItemsComponent } from './admin-items/admin-items.component';
import { AdminPasswordComponent } from './admin-password/admin-password.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ContactusloginComponent } from './contactuslogin/contactuslogin.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsloginComponent } from './itemslogin/itemslogin.component';
import { KitchenitemsComponent } from './kitchenitems/kitchenitems.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'homelogin', component: HomeloginComponent},
  {path:'kitchen',component:KitchenitemsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-items/:id',component:ItemDetailComponent},
  {path:'admin-items',component:AdminItemsComponent},
  {path:'add-items',component:AddItemComponent},
  {path:'admin-password',component:AdminPasswordComponent},
  {path:'add-to-cart/:id',component:AddToCartComponent},
  {path:'itemslogin',component:ItemsloginComponent},
  {path:'cart',component:CartComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'aboutuslogin',component:AboutusloginComponent},
  {path:'contactuslogin',component:ContactusloginComponent},
  {path:'success',component:PaymentsuccessComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
