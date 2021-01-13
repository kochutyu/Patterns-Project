import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/shared.module";

import {RouterModule, Routes} from "@angular/router";
import {StructurePatternsComponent} from "./shared/containers/patterns/structure-patterns.component";
import {CreatePatternsComponent} from "./shared/containers/patterns/create-patterns.component";
import {SettingsContainerComponent} from "./shared/containers/settings-container.component";
import {SettingsComponent} from "./settings.component";

import {SettingsService} from "../../core/services/settings.service";


const routes: Routes = [
  {
    path: '', component: SettingsComponent
  }
]

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsContainerComponent,
    CreatePatternsComponent,
    StructurePatternsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    SettingsService
  ]
})
export class SettingsModule {
}
