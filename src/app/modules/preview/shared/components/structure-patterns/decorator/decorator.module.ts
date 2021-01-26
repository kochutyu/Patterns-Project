import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecoratorComponent} from "./decorator.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../../../shared/shared.module";


const routes: Routes = [
  {path: '', component: DecoratorComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DecoratorModule {
}
