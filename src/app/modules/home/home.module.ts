import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [

    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule {
}
