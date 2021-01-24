import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BridgeComponent} from "./bridge.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../../../shared/shared.module";


const routes: Routes = [
  {path: '', component: BridgeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    BridgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BridgeModule {
}
