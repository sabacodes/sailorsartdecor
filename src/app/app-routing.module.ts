import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./construction/construction.module').then(m => m.ConstructionModule),
  },


  {
    path: "web",
    loadChildren: () => import('./comman-components/comman-components.module').then(m => m.CommanComponentsModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
