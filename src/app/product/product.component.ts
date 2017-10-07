import { Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { Product } from './product';

import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit {
  productName: string = 'LED TV 56inches';
  hidden: boolean = true;
  message: string;
  title: string = 'Product List';
  products: Product[] = [{
    id: 1, name: 'LED TV', price: 10000
  },
  {
    id: 2, name: 'AC', price: 20000
  }];

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  @ViewChildren(ProductListComponent)
  productListChildren: QueryList<ProductListComponent>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productListComponent);
    console.log('This is viewChildren instance' + this.productListChildren);
    this.productListComponent.productList = this.products;
    this.productListComponent.title = this.title;
  }

  ngAfterViewInit(): void {
    console.log(this.productListChildren);


    this.productListChildren.forEach((data) => setTimeout(() => {
      data.title = 'Product List Children';
      data.productList = this.products;
    }, 0));

  }

  ngDoCheck(): void {
    console.log('this is do check event');
  }

  toggle() {
    this.hidden = !this.hidden;
    this.title = 'Product List Modified';
  }

  receiveFromChild(visible: boolean) {
    console.log(visible);
  }

  messageFromChild(message: string) {
    this.message = message;
  }

  ngOnDestroy(): void {
    alert('Are you sure you want to close this component');
  }


}
