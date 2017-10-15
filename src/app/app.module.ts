import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { ProductService } from './service/product/product.service';
import { LoginService } from './service/login/login.service';
import { NewloginService } from './service/newlogin/newlogin.service';
import { CustomerComponent } from './customer/customer.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';

import { PostService } from './service/post/post.service';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CustomerComponent,
    PostComponent,
    PostListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ProductService, { provide: LoginService, useClass: NewloginService }, PostService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
