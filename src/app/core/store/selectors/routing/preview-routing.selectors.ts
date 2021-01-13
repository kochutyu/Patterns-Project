import {createSelector} from "@ngrx/store";
import {IAppState} from "../../../interfaces/store/state/app-state.interface";
import {IAppRouting} from "../../../interfaces/store/state/routing/app-routing.interface";

export class PreviewRoutingSelectors {

  public static selectActiveStatus = createSelector(
    PreviewRoutingSelectors.selectPatternState,
    (state: IAppRouting) => state.preview.isActive
  );

  public static selectPatternState(state: IAppState): IAppRouting {
    return state.routing;
  }
}
