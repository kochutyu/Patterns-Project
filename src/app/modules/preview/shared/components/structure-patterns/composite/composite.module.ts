import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompositeComponent} from "./composite.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../../../shared/shared.module";
import { TreeComponent } from './shared/components/tree/tree.component';


const routes: Routes = [
  {path: '', component: CompositeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    CompositeComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CompositeModule {
}
