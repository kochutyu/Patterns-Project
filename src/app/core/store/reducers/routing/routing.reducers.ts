import {createReducer, on} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {IAppRouting} from "../../../interfaces/store/state/routing/app-routing.interface";
import {TogglePreviewRouting} from "../../actions/routing/routing.actions";
import {URouting} from "../../../utils/store/routing.utils";

const _routingReducer = createReducer(
  AppState.initialState.routing,
  on(TogglePreviewRouting, (state: IAppRouting, {status}) => (
    URouting.reduceAppRoutingState(state, 'preview', status)
  )),
);

export function routingReducer(state, action): IAppRouting {
  return _routingReducer(state, action);
}
