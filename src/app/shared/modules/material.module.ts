import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatTabsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {
}
