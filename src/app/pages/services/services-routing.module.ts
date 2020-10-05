import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalComponent } from './legal/legal.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path: "",
    component: ServicesComponent
  },
  {
    path: "legal",
    component: LegalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
