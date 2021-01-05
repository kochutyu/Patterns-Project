import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  exports: [
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule {
}
