import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";

import {SettingsService} from "../../../services/settings.service";

import {TogglePreviewRouting} from "../../actions/routing/routing.actions";

@Injectable()
export class RoutingEffects {

  @Effect({dispatch: false})
  preview$ = this._actions$.pipe(
    ofType(TogglePreviewRouting),
  );

  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _settings: SettingsService,
  ) {
  }

}
