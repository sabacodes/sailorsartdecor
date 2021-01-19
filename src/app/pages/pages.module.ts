import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { ExtrasComponent } from '../comman-components/extras/extras.component';
import { CommanComponentsModule } from '../comman-components/comman-components.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarouselModule } from 'primeng/carousel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {RatingModule} from 'primeng/rating';


@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,AccordionModule,
    PagesRoutingModule, CommanComponentsModule, MatFormFieldModule, MatInputModule, 
    CarouselModule, ReactiveFormsModule, FormsModule,RatingModule
  ]
})
export class PagesModule { }
