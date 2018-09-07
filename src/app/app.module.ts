import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceComponent } from './service/service.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { ProductComponent } from './product/product.component';     
import { ReactiveFormsModule } from '@angular/forms';
import { TitlePipe } from './title.pipe';
import { BgColorDirective } from './bg-color.directive';                                    //*

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ServiceComponent,
    ProductServiceComponent,
    ProductComponent,
    TitlePipe,
    BgColorDirective
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot([
      {path: "",component: ProductListComponent },
      {path: "cart", component: ShoppingCartComponent},
      {path: "about", loadChildren: "./about/about.module#AboutModule"},
    ]),
    ReactiveFormsModule                                                      //*
  ],
  providers: [],
  bootstrap: [AppComponent]                                                  //*
})
export class AppModule { }
