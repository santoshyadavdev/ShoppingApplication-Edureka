import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormsModule],
  declarations: [ProductComponent,
    ProductListComponent]
})
export class ProductModule { }
