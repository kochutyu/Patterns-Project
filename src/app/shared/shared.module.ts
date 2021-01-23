import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MaterialModule} from './modules/material.module';
import {NavbarViewComponent} from "./components/navbar-view/navbar-view.component";
import {BlockCategoryComponent} from "./components/block-category/block-category.component";
import {BlockCategoryListComponent} from "./components/block-category/block-category-list/block-category-list.component";
import {CardComponent} from './components/card/card.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { CursorCenterDirective } from './directives/cursor-center.directive';
import { JoinPipe } from './pipes/join.pipe';
import { SplitPipe } from './pipes/split.pipe';


@NgModule({
  declarations: [
    NavbarViewComponent,
    BlockCategoryComponent,
    BlockCategoryListComponent,
    CardComponent,
    NotFoundComponent,
    CursorCenterDirective,
    JoinPipe,
    SplitPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    NavbarViewComponent,
    BlockCategoryComponent,
    BlockCategoryListComponent,
    CardComponent,
    NotFoundComponent,
    JoinPipe,
    SplitPipe
  ]
})
export class SharedModule {
}
