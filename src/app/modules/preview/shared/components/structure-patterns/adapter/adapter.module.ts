import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdapterComponent} from "./adapter.component";
import {SharedModule} from "../../../../../../shared/shared.module";
import {MatOptionModule} from "@angular/material/core";
import {ExchangerService} from "./shared/services/exchanger.service";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {path: '', component: AdapterComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AdapterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    ExchangerService
  ]
})
export class AdapterModule {
}
