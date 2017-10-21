import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from '../service/authGuard/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      ]
    )
    //FormsModule
  ],
  //exports: [FormsModule];
  declarations: [ProductComponent,
    ProductListComponent]
})
export class ProductModule { }
