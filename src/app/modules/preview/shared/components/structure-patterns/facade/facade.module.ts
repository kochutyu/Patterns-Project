import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacadeComponent} from "./facade.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: FacadeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    FacadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FacadeModule {
}
