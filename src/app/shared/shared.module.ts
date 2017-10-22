import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CurrencyPipe } from '../custompipes/currency.pipe';
import { PricePipe } from '../custompipes/price.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CurrencyPipe, PricePipe],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyPipe,
    PricePipe
  ]
})
export class SharedModule { }
