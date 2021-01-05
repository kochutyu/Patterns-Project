import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarViewComponent} from './navbar/navbar-view/navbar-view.component';
import {SharedModule} from "../shared.module";
import {RouterModule} from "@angular/router";
import { BlockCategoryComponent } from './block-category/block-category.component';
import { BlockCategoryListComponent } from './block-category/block-category-list/block-category-list.component';


@NgModule({
  declarations: [
    NavbarViewComponent,
    BlockCategoryComponent,
    BlockCategoryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarViewComponent,
    BlockCategoryComponent,
    BlockCategoryListComponent
  ]

})
export class SharedComponentModule {
}
