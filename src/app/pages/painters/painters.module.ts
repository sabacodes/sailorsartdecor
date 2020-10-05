import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintersRoutingModule } from './painters-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    PaintersRoutingModule
  ]
})
export class PaintersModule { }
