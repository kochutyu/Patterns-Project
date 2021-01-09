import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {switchMap, tap} from "rxjs/operators";
import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";
import {Store} from "@ngrx/store";
import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction
} from "../../actions/settings/structure-pattern.action";
import {
  selectAdapterPattern,
  selectBridgePattern,
  selectCompositePattern
} from "../../selectors/settings/structure-pattern.selectors";
import {EStructurePatternStorage} from "../../../enums/storage/settings/structure-pattern-storage.enum";

@Injectable()
export class StructurePatternEffects {

  @Effect({dispatch: false})
  adapterState$ = this._actions$.pipe(
    ofType(TurnOnAdapterPatternAction, TurnOffAdapterPatternAction),
    switchMap(() => this._store.select(selectAdapterPattern)),
    tap(v => PatternStateStorage.setState(EStructurePatternStorage.ADAPTER_STATE, v.isChecked))
  )

  @Effect({dispatch: false})
  bridgeState$ = this._actions$.pipe(
    ofType(TurnOnBridgePatternAction, TurnOffBridgePatternAction),
    switchMap(() => this._store.select(selectBridgePattern)),
    tap(v => PatternStateStorage.setState(EStructurePatternStorage.BRIDGE_STATE, v.isChecked))
  )

  @Effect({dispatch: false})
  compositeState$ = this._actions$.pipe(
    ofType(TurnOnCompositePatternAction, TurnOffCompositePatternAction),
    switchMap(() => this._store.select(selectCompositePattern)),
    tap(v => PatternStateStorage.setState(EStructurePatternStorage.COMPOSITE_STATE, v.isChecked))
  )

  constructor(
    private _actions$: Actions,
    private _store: Store
  ) {
  }

}
