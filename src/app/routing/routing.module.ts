import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { ProductComponent } from '../product/product.component';
import { CustomerComponent } from '../customer/customer.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../service/authGuard/auth.guard';

import { PostResolveGuard } from '../service/post/post-resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'post', component: PostComponent, canActivate: [AuthGuard], resolve: {
          postDataList: PostResolveGuard
        }
      },
      //{ path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      //{ path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
      { path: 'product', loadChildren: '../product/product.module#ProductModule' },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
