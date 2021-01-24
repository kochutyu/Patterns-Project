import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecoratorComponent} from "./decorator.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: DecoratorComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DecoratorModule {
}
