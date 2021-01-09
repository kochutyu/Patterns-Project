import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {
  TurnOffBuilderPatternAction,
  TurnOffFactoryPatternAction,
  TurnOnBuilderPatternAction,
  TurnOnFactoryPatternAction
} from "../../actions/settings/create-pattern.action";
import {switchMap, tap} from "rxjs/operators";
import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";
import {ECreatePatternStorage} from "../../../enums/storage/settings/create-pattern-storage.enum";
import {Store} from "@ngrx/store";
import {selectBuilderPattern, selectFactoryPattern} from "../../selectors/settings/create-pattern.selectors";

@Injectable()
export class CreatePatternEffects {

  @Effect({dispatch: false})
  factoryState$ = this._actions$.pipe(
    ofType(TurnOnFactoryPatternAction, TurnOffFactoryPatternAction),
    switchMap(() => this._store.select(selectFactoryPattern)),
    tap(v => PatternStateStorage.setState(ECreatePatternStorage.FACTORY_STATE, v.isChecked))
  )

  @Effect({dispatch: false})
  builderState$ = this._actions$.pipe(
    ofType(TurnOnBuilderPatternAction, TurnOffBuilderPatternAction),
    switchMap(() => this._store.select(selectBuilderPattern)),
    tap(v => PatternStateStorage.setState(ECreatePatternStorage.BUILDER_STATE, v.isChecked))
  )

  constructor(
    private _actions$: Actions,
    private _store: Store
  ) {
  }

}
