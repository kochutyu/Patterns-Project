import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from "./admin-panel.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: AdminPanelComponent, children: []
  }
]

@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminPanelModule {
}
