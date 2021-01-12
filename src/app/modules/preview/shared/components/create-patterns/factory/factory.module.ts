import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactoryComponent} from "./factory.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: FactoryComponent}
]

@NgModule({
  declarations: [
    FactoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FactoryModule {
}
