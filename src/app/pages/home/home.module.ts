import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';



@NgModule({
  declarations: [GalleryComponent, DetailsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, NgbModule,CarouselModule
  ]
})
export class HomeModule { }
