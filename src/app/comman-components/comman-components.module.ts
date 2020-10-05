import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanComponentsRoutingModule } from './comman-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { LayoutComponent } from './layout/layout.component';
import { ExtrasComponent } from './extras/extras.component';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainContainerComponent, LayoutComponent, ExtrasComponent],
  imports: [
    CommonModule,
    CommanComponentsRoutingModule,SidebarModule
  ],
  exports: [
    HeaderComponent,FooterComponent,MainContainerComponent,LayoutComponent, ExtrasComponent
  ]
})
export class CommanComponentsModule { }
