import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreRouterConnectingModule} from "@ngrx/router-store";

import {StoreEffectConfig} from "../config/store/store-effect.config";
import {environment} from "../../../environments/environment";

import {AppReducers} from "../store/reducers/app.reducers";


@NgModule({
  imports: [
    StoreModule.forRoot(AppReducers.getReducers),
    EffectsModule.forRoot(StoreEffectConfig.getAllEffects),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class NgrxModule {
}
