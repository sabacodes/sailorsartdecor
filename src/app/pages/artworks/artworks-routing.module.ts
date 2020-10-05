import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworksComponent } from './artworks/artworks.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path:"",
    component:ArtworksComponent
  },
  {
    path:"view",
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtworksRoutingModule { }
