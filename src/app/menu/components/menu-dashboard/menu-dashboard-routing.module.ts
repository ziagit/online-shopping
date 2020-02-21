import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuDashboardComponent } from './menu-dashboard.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
    {
        path: '',
        component: MenuDashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full'
              },
              {
                path: 'buttons',
                component: ButtonsComponent
              },
              {
                path: 'checkbox',
                component: CheckboxComponent
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuDashboardRoutingModule {}
