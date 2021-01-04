import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarViewComponent} from './navbar/navbar-view/navbar-view.component';
import {SharedModule} from "../shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NavbarViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarViewComponent
  ]

})
export class SharedComponentModule {
}
