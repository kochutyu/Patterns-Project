import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactoryMethodComponent} from "./factory-method.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: FactoryMethodComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    FactoryMethodComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FactoryMethodModule {
}
