import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productList = this.cartService.getItems();
  }

}
