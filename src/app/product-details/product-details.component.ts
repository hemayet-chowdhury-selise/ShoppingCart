import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('id')];
  });
  }

  onBuy(){
    this.cartService.addToCart(this.product);
  }

}
