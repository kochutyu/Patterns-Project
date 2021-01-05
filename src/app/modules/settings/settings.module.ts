import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsComponent} from "./settings.component";
import {RouterModule, Routes} from "@angular/router";
import {ConfigComponent} from "./shared/compontnts/config/config.component";
import {SharedModule} from "../../shared/shared.module";
import {SharedComponentModule} from "../../shared/components/shared-component.module";

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: []
  }
]

@NgModule({
  declarations: [
    SettingsComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SharedComponentModule
  ]
})
export class SettingsModule {
}
