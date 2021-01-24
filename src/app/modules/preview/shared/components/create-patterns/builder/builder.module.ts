import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuilderComponent} from "./builder.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../../../shared/shared.module";
import {ManService} from "./shared/man.service";


const routes: Routes = [
  {path: '', component: BuilderComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    BuilderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    ManService
  ]
})
export class BuilderModule {
}
