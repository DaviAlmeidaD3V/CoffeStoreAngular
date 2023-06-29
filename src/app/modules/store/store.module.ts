import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffesComponent } from './coffes/coffes.component';
import { RoastedComponent } from './roasted/roasted.component';
import { CapsulesComponent } from './capsules/capsules.component';



@NgModule({
  declarations: [
    CoffesComponent,
    RoastedComponent,
    CapsulesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
