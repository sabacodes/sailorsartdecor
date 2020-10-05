import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { LegalComponent } from './legal/legal.component';
import { ServicesComponent } from './services/services.component';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [LegalComponent, ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,AccordionModule
  ]
})
export class ServicesModule { }
