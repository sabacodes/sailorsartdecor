import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListingComponent } from './listing/listing.component';
import { ViewComponent } from './view/view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListingComponent, ViewComponent],
  imports: [
    CommonModule,
    BlogRoutingModule, NgxPaginationModule, FormsModule, ReactiveFormsModule
  ]
})
export class BlogModule { }
