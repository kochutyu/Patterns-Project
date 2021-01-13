import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CreatePatternRoutingConstant} from "../../core/constant/routing/preview/create-pattern-routing.constant";
import {PreviewComponent} from "./preview.component";
import {StructurePatternRoutingConstant} from "../../core/constant/routing/preview/structure-pattern-routing.constant";

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
      },
      {
        path: StructurePatternRoutingConstant.getAdapter.path,
        loadChildren: () => import('./shared/components/structure-patterns/adapter/adapter.module').then(m => m.AdapterModule)
      },
      {
        path: StructurePatternRoutingConstant.getBridge.path,
        loadChildren: () => import('./shared/components/structure-patterns/bridge/bridge.module').then(m => m.BridgeModule)
      },
      {
        path: StructurePatternRoutingConstant.getComposite.path,
        loadChildren: () => import('./shared/components/structure-patterns/composite/composite.module').then(m => m.CompositeModule)
      },
    ],
  }
];

@NgModule({
  declarations: [
    PreviewComponent,
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
