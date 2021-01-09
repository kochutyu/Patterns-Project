import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {AppReducers} from "../store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {StoreEffectConfig} from "../config/store/store-effect.config";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {environment} from "../../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

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
