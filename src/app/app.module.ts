import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppSharedModule} from "./app-shared.module";
import {AngularFireModule} from "@angular/fire";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';

import {environment} from "../environments/environment";
import {SharedComponentModule} from "./shared/components/shared-component.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppSharedModule,
    HttpClientModule,
    SharedModule,
    SharedComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
