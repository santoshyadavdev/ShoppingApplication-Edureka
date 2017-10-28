import { HttpClient, HttpHeaders } from '@angular/common/http';


import { APP_CONFIG } from '../appconfig/appconfig.service';
import { IAppConfig } from '../appconfig/Iapp.config';
import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ProductService {

  products: Product[] = [{
    id: 1, name: 'LED TV', price: 10000, createdDate: new Date('11-Nov-2014')
  },
  {
    id: 2, name: 'AC', price: 20000, createdDate: new Date('11-Nov-2014')
  }];

  constructor(private isLoggedIn: boolean,
    private httpService: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig) {
    console.log(isLoggedIn);
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    return this.httpService.post(this.config.productAPI, product);
    // this.products.push(product);
  }

}
