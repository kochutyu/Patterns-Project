import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FirebaseModule} from "./core/modules/firebase.module";
import {SharedModule} from "./shared/shared.module";
import {NgrxModule} from "./core/modules/ngrx.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule,
    NgrxModule,
    SharedModule,
  ],
  exports: [
    FirebaseModule,
    NgrxModule,
    SharedModule
  ]
})
export class AppSharedModule {
}
