import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component'
import { AuthGuard } from '../service/authGuard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
    ])
    // ReactiveFormsModule
  ],
  declarations: [CustomerComponent],
  // exports: [ReactiveFormsModule]
})
export class CustomerModule { }
