import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtworksRoutingModule } from './artworks-routing.module';
import { ArtworksComponent } from './artworks/artworks.component';
import { ViewComponent } from './view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ArtworksComponent, ViewComponent],
  imports: [
    CommonModule,
    ArtworksRoutingModule, NgxPaginationModule
  ]
})
export class ArtworksModule { }
