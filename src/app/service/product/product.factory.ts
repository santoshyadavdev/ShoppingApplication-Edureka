
import { LoginService } from '../login/login.service';
import { ProductService } from './product.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { APP_CONFIG } from '../appconfig/appconfig.service';
import { IAppConfig } from '../appconfig/Iapp.config';
export function ProductFactory(login: LoginService, http: HttpClient, config: IAppConfig) {
    return new ProductService(login.isLoggedIn, http, config);
}

export const ProductFactoryProvider = {
    provide: ProductService,
    useFactory: ProductFactory,
    deps: [LoginService, HttpClient, APP_CONFIG]
}
