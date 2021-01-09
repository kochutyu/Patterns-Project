import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material.module';
import {NavbarViewComponent} from "./components/navbar-view/navbar-view.component";
import {BlockCategoryComponent} from "./components/block-category/block-category.component";
import {BlockCategoryListComponent} from "./components/block-category/block-category-list/block-category-list.component";
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    NavbarViewComponent,
    BlockCategoryComponent,
    BlockCategoryListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    NavbarViewComponent,
    BlockCategoryComponent,
    BlockCategoryListComponent,
    CardComponent
  ]
})
export class SharedModule {
}
