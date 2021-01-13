import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BridgeComponent} from "./bridge.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: BridgeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    BridgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BridgeModule {
}
