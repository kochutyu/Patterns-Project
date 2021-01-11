import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {switchMap, take, tap} from "rxjs/operators";
import {Store} from "@ngrx/store";

import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";

import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction
} from "../../actions/settings/structure-pattern.action";

import {UpdateDashboardStructurePattern} from "../../actions/dashboard/dashboard.action";

import {SSettings} from "../../selectors/settings/settings.selectors";

import {EStructurePatternStorage} from "../../../enums/storage/settings/structure-pattern-storage.enum";

import {SettingsService} from "../../../services/settings.service";

@Injectable()
export class StructurePatternEffects {

  @Effect({dispatch: false})
  adapterState$ = this._actions$.pipe(
    ofType(TurnOnAdapterPatternAction, TurnOffAdapterPatternAction),
    switchMap(() => this._store.select(SSettings.structurePatterns.selectAdapterPattern).pipe(take(1))),
    tap(v => PatternStateStorage.setState(EStructurePatternStorage.ADAPTER_STATE, v.isChecked)),
    tap(v => this._store.dispatch(UpdateDashboardStructurePattern({id: v.value}))),
    this._settings.saveDashboardStructurePatternToStoragePipe
  )

  @Effect({dispatch: false})
  bridgeState$ = this._actions$.pipe(
    ofType(TurnOnBridgePatternAction, TurnOffBridgePatternAction),
    switchMap(() => this._store.select(SSettings.structurePatterns.selectBridgePattern).pipe(take(1))),
    tap(v => PatternStateStorage.setState(EStructurePatternStorage.BRIDGE_STATE, v.isChecked)),
    tap(v => this._store.dispatch(UpdateDashboardStructurePattern({id: v.value}))),
    this._settings.saveDashboardStructurePatternToStoragePipe
  )

  @Effect({dispatch: false})
  compositeState$ = this._actions$.pipe(
    ofType(TurnOnCompositePatternAction, TurnOffCompositePatternAction),
    switchMap(() => this._store.select(SSettings.structurePatterns.selectCompositePattern).pipe(take(1))),
    tap(v => PatternStateStorage.setState(EStructurePatternStorage.COMPOSITE_STATE, v.isChecked)),
    tap(v => this._store.dispatch(UpdateDashboardStructurePattern({id: v.value}))),
    this._settings.saveDashboardStructurePatternToStoragePipe
  )

  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _settings: SettingsService
  ) {
  }

}
