import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {FactoryMethodComponent} from "./factory-method.component";

import {TeslaService} from "./shared/services/tesla.service";
import {SharedModule} from "../../../../../../shared/shared.module";


const routes: Routes = [
  {path: '', component: FactoryMethodComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    FactoryMethodComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    TeslaService
  ]
})
export class FactoryMethodModule {
}
