
import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ProductService {

  products: Product[] = [{
    id: 1, name: 'LED TV', price: 10000, createdDate: new Date('11-Nov-2014')
  },
  {
    id: 2, name: 'AC', price: 20000, createdDate: new Date('11-Nov-2014')
  }];

  constructor(private isLoggedIn: boolean) {
    console.log(isLoggedIn);
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

}
