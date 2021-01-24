import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {SingletonComponent} from "./singleton.component";

import {SharedModule} from "../../../../../../shared/shared.module";
import {LoaderService} from "../../../../../../core/services/loader.service";
import {ServerServices} from "./services/server.services";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {path: '', component: SingletonComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    SingletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    LoaderService,
    ServerServices
  ]
})
export class SingletonModule {
}
