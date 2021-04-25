import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { KitchenitemsComponent } from './kitchenitems/kitchenitems.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPasswordComponent } from './admin-password/admin-password.component';
import { AdminItemsComponent } from './admin-items/admin-items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ItemsloginComponent } from './itemslogin/itemslogin.component';
import { AboutusloginComponent } from './aboutuslogin/aboutuslogin.component';
import { ContactusloginComponent } from './contactuslogin/contactuslogin.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KitchenitemsComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminPasswordComponent,
    AdminItemsComponent,
    ItemDetailComponent,
    AddItemComponent,
    CartComponent,
    AddToCartComponent,
    KitchenitemsComponent,
    ItemsloginComponent,
    AboutusloginComponent,
    ContactusloginComponent,
    HomeloginComponent,
    PaymentComponent,
    PaymentsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
