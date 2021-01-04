import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FirebaseModule} from "./app-modules/firebase.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule,
    SharedModule
  ],
  exports: [
    FirebaseModule,
    SharedModule
  ]
})
export class AppSharedModule {
}
