import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsComponent} from "./settings.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {SettingsContainerComponent} from './shared/containers/settings-container/settings-container.component';
import {CreatePatternsComponent} from './shared/containers/settings-container/patterns/create-patterns.component';
import {StructurePatternsComponent} from "./shared/containers/settings-container/patterns/structure-patterns.component";

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: []
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
  exports: [],
  providers: []
})
export class SettingsModule {
}
