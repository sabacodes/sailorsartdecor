import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeModule } from './home/home.module';
import { ServicesComponent } from './services/services/services.component';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "services",
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: "artworks",
    loadChildren: () => import('./artworks/artworks.module').then(m => m.ArtworksModule)
  },
  {
    path: "blog",
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path:"painter",
    loadChildren: () => import('./painters/painters.module').then(m => m.PaintersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
