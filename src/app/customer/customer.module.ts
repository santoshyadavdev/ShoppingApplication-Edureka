import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerComponent],
  exports: [ReactiveFormsModule]
})
export class CustomerModule { }
