import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from '../service/authGuard/auth.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {  ProductService } from '../service/product/product.service';
import { ProductFactoryProvider } from '../service/product/product.factory';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: '', component: ProductComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
          children: [
            { path: ':id', component: ProductDetailComponent  },
            { path: 'edit/:id', component: ProductEditComponent }
          ]
        },
        //{ path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard] }
      ]
    )
    //FormsModule
  ],
  //exports: [FormsModule];
  declarations: [ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent],
    // providers: [ProductService],
    providers: [ProductFactoryProvider]
})
export class ProductModule { }
