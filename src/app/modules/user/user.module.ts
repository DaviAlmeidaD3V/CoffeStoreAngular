import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
  ]
})
export class UserModule { }
