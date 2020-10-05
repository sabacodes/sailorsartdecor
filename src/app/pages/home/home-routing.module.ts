import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:"",
    component:GalleryComponent
  },
  {
    path:"details",
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
