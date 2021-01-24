import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {PrototypeComponent} from "./prototype.component";

import {SharedModule} from "../../../../../../shared/shared.module";
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FormComponent } from './shared/components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PrototypeService} from "./shared/services/prototype.service";
import {LoaderService} from "./shared/services/loader.service";


const routes: Routes = [
  {path: '', component: PrototypeComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    PrototypeComponent,
    LoaderComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    PrototypeService,
    LoaderService
  ]
})
export class PrototypeModule {
}
