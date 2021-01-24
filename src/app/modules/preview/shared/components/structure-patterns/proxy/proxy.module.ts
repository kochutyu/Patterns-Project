import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProxyComponent} from "./proxy.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: ProxyComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    ProxyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProxyModule {
}
