import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreviewComponent} from "./preview.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CreatePatternRoutingConstant} from "../../core/constant/routing/create-pattern-routing.constant";

const routes: Routes = [
  {
    path: '', component: PreviewComponent, children: [
      {
        path: CreatePatternRoutingConstant.getFactory.path,
        loadChildren: () => import('./shared/components/create-patterns/factory/factory.module').then(m => m.FactoryModule)
      },
      {
        path: CreatePatternRoutingConstant.getBuilder.path,
        loadChildren: () => import('./shared/components/create-patterns/builder/builder.module').then(m => m.BuilderModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    PreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PreviewModule {
}
