import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing/routing.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';

import { ProductService } from './service/product/product.service';
import { LoginService } from './service/login/login.service';
import { NewloginService } from './service/newlogin/newlogin.service';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';

import { PostService } from './service/post/post.service';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './service/authGuard/auth.guard';
import { PostResolveGuard } from './service/post/post-resolve.guard';

import { API_CONFIG, APP_CONFIG } from './service/appconfig/appconfig.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ProductModule,
    CustomerModule,
    RoutingModule
  ],
  providers: [PostResolveGuard, { provide: LoginService, useClass: NewloginService }, PostService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true }, AuthGuard,
    { provide: APP_CONFIG, useValue: API_CONFIG }],//ProductService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
