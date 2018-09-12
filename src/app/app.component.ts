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
    { id: "1", title: "รองเท้า Adidas", cetegory: "รองเท้า",  price: 200, imageUrl:"https://s7d4.scene7.com/is/image/JCPenney/DP0803201717061777M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2" },
    { id: "2", title: "เสื้อยืดขาว",  cetegory: "เสื้อ", price: 300, imageUrl:"https://www.rushordertees.com/design/ZoomImage.php?src=2864256_f&style=g200&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false" },
    { id: "3", title: "กระเป๋าเป้",  cetegory: "กระเป๋า",  price: 50, imageUrl:"https://target.scene7.com/is/image/Target/52783397?wid=488&hei=488&fmt=pjpeg" },
    { id: "4", title: "เสื้อไหมพรม",  cetegory: "เสื้อ",  price: 100, imageUrl:"http://www.beautifulgreat.com/wp-content/uploads/2016/09/TB2hayyXBPzQeBjSZFlXXccIVXa_723644356.jpg" },
    { id: "5", title: "กางเกงยีนส์",  cetegory: "กางเกง",  price: 300, imageUrl:"https://i2.wp.com/www.central.co.th/e-shopping/wp-content/uploads/2016/12/%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%AA%E0%B9%8C%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%A2.jpg?fit=600%2C600&w=640" },
    { id: "6", title: "กางเกงขาม้าเอวสูง",  cetegory: "กางเกง",  price: 250, imageUrl:"http://my-test-11.slatic.net/original/77409a30bbc4739d6620966110993a25.jpg" }
  ];
  toggleCart = false;
  cartItemCount = 0;
  
  constructor(productService: ProductService){
    productService.itemList = this.ListItem;
    //const items = cartService.getItems(); 
    //this.cartItemCount = Object.keys(items).length;
  }
}
