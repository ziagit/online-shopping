import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MenuDashboardComponent } from './menu-dashboard.component';
import { MenuDashboardRoutingModule } from './menu-dashboard-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
    imports: [
        CommonModule,
        MenuDashboardRoutingModule,
        MaterialModule,
        ResizableModule
    ],
    declarations: [
        MenuDashboardComponent,
        ButtonsComponent,
        CheckboxComponent
    ]
})
export class MenuDashboardModule {}
