import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSettingsRoutingModule } from './menu-settings-routing.module';
import { MenuSettingsComponent } from './menu-settings.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { DarkRedComponent } from './colors/dark-red/dark-red.component';
import { LightRedComponent } from './colors/light-red/light-red.component';
import { DarkGreenComponent } from './colors/dark-green/dark-green.component';
import { LightGreenComponent } from './colors/light-green/light-green.component';
import { LightBlueComponent } from './colors/light-blue/light-blue.component';
import { DarkBlueComponent } from './colors/dark-blue/dark-blue.component';
import { MonospaceComponent } from './fonts/monospace/monospace.component';
import { FantacyComponent } from './fonts/fantacy/fantacy.component';



@NgModule({
  declarations: [
    MenuSettingsComponent,
    DarkRedComponent,
    LightRedComponent,
    DarkGreenComponent,
    LightGreenComponent,
    LightBlueComponent,
    DarkBlueComponent,
    MonospaceComponent,
    FantacyComponent
  ],
  imports: [
    CommonModule,
    MenuSettingsRoutingModule,
    MaterialModule
  ]
})
export class MenuSettingsModule { }
