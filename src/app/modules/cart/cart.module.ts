import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ConcludeComponent } from './conclude/conclude.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ConcludeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
