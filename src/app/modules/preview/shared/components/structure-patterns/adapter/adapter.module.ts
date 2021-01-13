import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdapterComponent} from "./adapter.component";


const routes: Routes = [
  {path: '', component: AdapterComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AdapterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdapterModule {
}
