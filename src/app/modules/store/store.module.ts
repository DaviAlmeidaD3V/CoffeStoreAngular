import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffesComponent } from './coffes/coffes.component';
import { RoastedComponent } from './roasted/roasted.component';
import { CapsulesComponent } from './capsules/capsules.component';
import { PromoSlideComponent } from './promo-slide/promo-slide.component';



@NgModule({
  declarations: [
    CoffesComponent,
    RoastedComponent,
    CapsulesComponent,
    PromoSlideComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
