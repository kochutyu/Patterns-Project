import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractFactoryComponent} from "./abstract-factory.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: AbstractFactoryComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AbstractFactoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AbstractFactoryModule {
}
