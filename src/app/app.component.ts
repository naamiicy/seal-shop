import { Component } from '@angular/core';
import {ProductService} from 'src/app/product.service';

//import { ProductServiceComponent } from './product-service/product-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'Seal Shop';
  ListItem = [
    { id: "1", title: "รองเท้า", cetegory: "รองเท้า",  price: 200, imageUrl:"https://s7d4.scene7.com/is/image/JCPenney/DP0803201717061777M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" },
    { id: "2", title: "เสื้อ",  cetegory: "เสื้อ", price: 300, imageUrl:"https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false" },
    { id: "3", title: "กระเป๋า",  cetegory: "กระเป๋า",  price: 50, imageUrl:"https://target.scene7.com/is/image/Target/52783397?wid=488&hei=488&fmt=pjpeg" }
  ];
  toggleCart = false;
  cartItemCount = 0;

  constructor(productService: ProductService){
    productService.itemList = this.ListItem;
    //const items = cartService.getItems(); 
    //this.cartItemCount = Object.keys(items).length;
  }
}
