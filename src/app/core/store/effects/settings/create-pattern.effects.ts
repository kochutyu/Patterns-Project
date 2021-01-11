import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {switchMap, take, tap} from "rxjs/operators";
import {Actions, Effect, ofType} from "@ngrx/effects";

import {UpdateDashboardCreatePattern} from "../../actions/dashboard/dashboard.action";

import {
  TurnOffBuilderPatternAction,
  TurnOffFactoryPatternAction,
  TurnOnBuilderPatternAction,
  TurnOnFactoryPatternAction
} from "../../actions/settings/create-pattern.action";

import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";

import {SSettings} from "../../selectors/settings/settings.selectors";

import {ECreatePatternStorage} from "../../../enums/storage/settings/create-pattern-storage.enum";

import {SettingsService} from "../../../services/settings.service";


@Injectable()
export class CreatePatternEffects {

  @Effect({dispatch: false})
  factoryState$ = this._actions$.pipe(
    ofType(TurnOnFactoryPatternAction, TurnOffFactoryPatternAction),
    switchMap(() => this._store.select(SSettings.createPatterns.selectFactoryPattern).pipe(take(1))),
    tap(v => PatternStateStorage.setState(ECreatePatternStorage.FACTORY_STATE, v.isChecked)),
    tap(v => this._store.dispatch(UpdateDashboardCreatePattern({id: v.value}))),
    this._settings.saveDashboardCreatePatternToStoragePipe
  )

  @Effect({dispatch: false})
  builderState$ = this._actions$.pipe(
    ofType(TurnOnBuilderPatternAction, TurnOffBuilderPatternAction),
    switchMap(() => this._store.select(SSettings.createPatterns.selectBuilderPattern).pipe(take(1))),
    tap(v => PatternStateStorage.setState(ECreatePatternStorage.BUILDER_STATE, v.isChecked)),
    tap(v => this._store.dispatch(UpdateDashboardCreatePattern({id: v.value}))),
    this._settings.saveDashboardCreatePatternToStoragePipe
  )

  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _settings: SettingsService
  ) {
  }

}
