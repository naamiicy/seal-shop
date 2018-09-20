import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
// import { ProductService } from '../product.service';
import {ProductService} from "../product.service"
import { CartService } from '../cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() ListItem: Item[]
  
  constructor(private productService: ProductService
  ,private cartService: CartService
  ,private router: ActivatedRoute ) {  
    
    this.productService.getAll().subscribe({
      next: (products) => {
        
        this.router.queryParamMap.subscribe({     
          next: (queryparamMap: ParamMap) => {

            if(queryparamMap.has("category")){
              const cetegory = queryparamMap.get("category");
              this.ListItem = products.filter((item) => {
                return item.cetegory == cetegory
              });  
            }else{
              this.ListItem = products;
            }
          }
        });

      }
    });
  }

  ngOnInit() {            
    //1 Time per Call
    console.log("1","ngOnInit");
  }

  addToCart(item: Item){
    this.cartService.addItem(item);
  }

  /*
  ngOnChanges(){
    console.log("2","ngOnChanges");
  }
  ngDoCheck(){                              //Some event and check event
    console.log("3","ngDoCheck");
  } 
  ngOnDestory(){                            //On switch page have call
    console.log("4","ngOnDestory");
  }
  ngAfterContentInit(){
    console.log("5","ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("6","ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("7","ngAfterViewInit");     //*
  }
  ngAfterViewChecked(){
    console.log("8","ngAfterViewChecked");
  }
  */
}

