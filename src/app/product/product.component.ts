import { Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { Product } from '../service/product/product';

import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit {
  productName: string = 'LED TV 56inches';
  hidden: boolean = true;
  message: string;
  title: string = 'Product List';
  product: Product = new Product();
  // productService = new ProductService();

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  @ViewChildren(ProductListComponent)
  productListChildren: QueryList<ProductListComponent>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log(this.productListComponent);
    console.log('This is viewChildren instance' + this.productListChildren);
    this.productListComponent.productList = this.productService.getProducts();
    this.productListComponent.title = this.title;
    //this.product = this.productService.getProducts()[0];
  }

  ngAfterViewInit(): void {
    console.log(this.productListChildren);

    this.productListChildren.forEach((data) => setTimeout(() => {
      data.title = 'Product List Children';
      data.productList = this.productService.getProducts();
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

  addProduct() {
    this.productService.addProduct(this.product);
    this.productListComponent.productList = this.productService.getProducts();
    this.product = new Product();
  }

  ngOnDestroy(): void {
    alert('Are you sure you want to close this component');
  }


}
