import {IAppRouting} from "../../../../shared/interfaces/store/state/routing/app-routing.interface";
import {initialPreviewRoutingState} from "./app-routing/preview-routing.state";

export const initialAppRouting: IAppRouting = {
  preview: initialPreviewRoutingState
}
