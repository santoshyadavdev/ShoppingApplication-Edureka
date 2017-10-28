import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CurrencyPipe } from '../custompipes/currency.pipe';
import { PricePipe } from '../custompipes/price.pipe';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { HoverDirective } from '../directive/hover.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [CurrencyPipe, PricePipe ,HoverDirective],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyPipe,
    PricePipe,
    MatButtonModule,
    MatDialogModule,
    HoverDirective
  ]
})
export class SharedModule { }
