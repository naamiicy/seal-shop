import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceComponent } from './service/service.component';
import { ProductServiceComponent } from './product-service/product-service.component';   
import { ReactiveFormsModule } from '@angular/forms';
import { TitlePipe } from './title.pipe';
import { BgColorDirective } from './bg-color.directive';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ServiceComponent,
    ProductServiceComponent,
    TitlePipe,
    BgColorDirective,
    OrderSummaryComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot([
      {path: "",component: ProductListComponent},
      {path: "cart", component: ShoppingCartComponent},
      {path: "bill",component: OrderSummaryComponent},
      {path: "about", component: AboutComponent},
      {path: "contact", component: ContactComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule,   
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMsOLPVtDoh_VLPhZR5uO8Mhly2bXf6KU'  
    })                                                                       //*
  ],
  providers: [],
  bootstrap: [AppComponent]                                                  //*
})
export class AppModule { }
