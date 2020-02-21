import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'menu-dashboard',
        loadChildren: './components/menu-dashboard/menu-dashboard.module#MenuDashboardModule',
      },
      {
        path: 'menu-settings',
        loadChildren: './components/menu-settings/menu-settings.module#MenuSettingsModule'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
