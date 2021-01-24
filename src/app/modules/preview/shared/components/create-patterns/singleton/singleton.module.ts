import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {SingletonComponent} from "./singleton.component";

import {SharedModule} from "../../../../../../shared/shared.module";


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
    SharedModule
  ]
})
export class SingletonModule {
}
