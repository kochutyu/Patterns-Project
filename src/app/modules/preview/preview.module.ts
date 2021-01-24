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



      // CREATION DESIGN PATTERNS
      {
        path: CreatePatternRoutingConstant.getAbstractFactory.path,
        loadChildren: () => import('./shared/components/create-patterns/abstract-factory/abstract-factory.module').then(m => m.AbstractFactoryModule)
      },
      {
        path: CreatePatternRoutingConstant.getFactoryMethod.path,
        loadChildren: () => import('./shared/components/create-patterns/factory-method/factory-method.module').then(m => m.FactoryMethodModule)
      },
      {
        path: CreatePatternRoutingConstant.getBuilder.path,
        loadChildren: () => import('./shared/components/create-patterns/builder/builder.module').then(m => m.BuilderModule)
      },
      {
        path: CreatePatternRoutingConstant.getPrototype.path,
        loadChildren: () => import('./shared/components/create-patterns/prototype/prototype.module').then(m => m.PrototypeModule)
      },
      {
        path: CreatePatternRoutingConstant.getSingleton.path,
        loadChildren: () => import('./shared/components/create-patterns/singleton/singleton.module').then(m => m.SingletonModule)
      },



      // STRUCTURE DESIGN PATTERNS
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

      {
        path: StructurePatternRoutingConstant.getDecorator.path,
        loadChildren: () => import('./shared/components/structure-patterns/decorator/decorator.module').then(m => m.DecoratorModule)
      },
      {
        path: StructurePatternRoutingConstant.getFacade.path,
        loadChildren: () => import('./shared/components/structure-patterns/facade/facade.module').then(m => m.FacadeModule)
      },
      {
        path: StructurePatternRoutingConstant.getFlyweight.path,
        loadChildren: () => import('./shared/components/structure-patterns/flyweight/flyweight.module').then(m => m.FlyweightModule)
      },
      {
        path: StructurePatternRoutingConstant.getProxy.path,
        loadChildren: () => import('./shared/components/structure-patterns/proxy/proxy.module').then(m => m.ProxyModule)
      },



      // ACTION DESIGN PATTERNS
    ]
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
