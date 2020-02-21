import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuSettingsComponent } from './menu-settings.component';
import { LightRedComponent } from './colors/light-red/light-red.component';
import { DarkGreenComponent } from './colors/dark-green/dark-green.component';
import { LightGreenComponent } from './colors/light-green/light-green.component';
import { LightBlueComponent } from './colors/light-blue/light-blue.component';
import { FantacyComponent } from './fonts/fantacy/fantacy.component';
import { MonospaceComponent } from './fonts/monospace/monospace.component';
import { DarkRedComponent } from './colors/dark-red/dark-red.component';
import { DarkBlueComponent } from './colors/dark-blue/dark-blue.component';
const routes: Routes = [
  {
      path: '',
      component: MenuSettingsComponent,
      children: [
          {
            path: 'fantacy',
            component: FantacyComponent,
          },
          {
            path: 'monospace',
            component: MonospaceComponent
          },
          {
            path: 'dark-red',
            component: DarkRedComponent
          },
          {
            path: 'light-red',
            component: LightRedComponent
          },
          {
            path: 'dark-green',
            component: DarkGreenComponent
          },
          {
            path: 'light-green',
            component: LightGreenComponent
          },
          {
            path: 'dark-blue',
            component: DarkBlueComponent
          },
          {
            path: 'light-blue',
            component: LightBlueComponent
          },
      ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuSettingsRoutingModule { }
