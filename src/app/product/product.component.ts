import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productName: string = 'LED TV 56inches';
  hidden: boolean = true;
  products: Product[] = [{
    id: 1, name: 'LED TV', price: 10000
  },
  {
    id: 2, name: 'AC', price: 20000
  }];

  constructor() { }

  toggle() {
    this.hidden = !this.hidden;
  }

}
