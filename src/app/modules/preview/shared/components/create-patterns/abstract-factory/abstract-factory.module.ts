import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractFactoryComponent} from "./abstract-factory.component";
import {RouterModule, Routes} from "@angular/router";
// import {CarsSpecifications2Service} from "./shared/services/cars-specifications-2.service";
// import {CarsSpecifications1Service} from "./shared/services/cars-specifications-1.service";
import {TeslaService} from "./shared/services/tesla.service";
import {SharedModule} from "../../../../../../shared/shared.module";


const routes: Routes = [
  {path: '', component: AbstractFactoryComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AbstractFactoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    TeslaService,
    // CarsSpecifications1Service,
    // CarsSpecifications2Service
  ]
})
export class AbstractFactoryModule {
}
