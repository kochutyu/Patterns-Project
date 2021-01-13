import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompositeComponent} from "./composite.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: CompositeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    CompositeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompositeModule {
}
