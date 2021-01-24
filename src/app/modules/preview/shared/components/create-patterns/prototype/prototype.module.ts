import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {PrototypeComponent} from "./prototype.component";

import {SharedModule} from "../../../../../../shared/shared.module";


const routes: Routes = [
  {path: '', component: PrototypeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    PrototypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PrototypeModule {
}
