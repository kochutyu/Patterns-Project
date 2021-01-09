import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireFunctionsModule} from "@angular/fire/functions";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireMessagingModule} from "@angular/fire/messaging";
import {AngularFireAuthModule} from "@angular/fire/auth";

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
  ],
  exports: [
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
  ]
})
export class FirebaseModule {
}
