import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../../cart';
import { FormControl, FormArray,FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Item } from '../item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem;
  cartItemsKeys: string[];
  amountInput:  FormControl;
  amountArrayControl: FormArray;
  formGroup: FormGroup;
  totalPrice : Number;
  toggleCart = true;

  constructor(public cartService: CartService, formBuilder: FormBuilder) {      //*
    this.cartItems = cartService.getItems();
    this.cartItemsKeys = Object.keys(this.cartItems);
    this.amountArrayControl = new FormArray([], Validators.required);         //ถ้ามีค่าให้แสดงค่านั้น  แต่ไม่มีค่าให้ Validators.required
    this.formGroup = new FormGroup({
      cartList: this.amountArrayControl
    });
    
    this.formGroup.valueChanges.subscribe({         //*
      next: (data) => {
        console.dir(data);
          this.totalPrice = data.cartList.reduce((total, amount, index) => {   //ส่งค่าไปให้ Loop ถัดไป
            const itemId = this.cartItemsKeys[index];                          //วนหาค่าIndex ของ Id
            const itemInCart = this.cartItems[itemId];
              return (amount* itemInCart.item.price) + total;                 //หาราคาจากIndex ของ Id               
        }, 0);
       
      },
      error: (err) => {},
      complete: () => {}
    });          
    
    this.cartItemsKeys.forEach((cartItemKeys) => {
      this.amountArrayControl.push(
        new FormControl(this.cartItems[cartItemKeys].amount, 
          [Validators.min(1), Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)] ));
    });
  }

  ngOnInit() {
  }

  removeItem(itemId: string, index: number){   
      this.cartItemsKeys.splice(index, 1);
      this.amountArrayControl.removeAt(index);
      delete this.cartItems[itemId];
  }

}
