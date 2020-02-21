import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from '../shared/material.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    MenuComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule
  ]
})
export class MenuModule { }
