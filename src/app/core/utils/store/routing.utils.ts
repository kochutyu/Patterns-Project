import {IAppRouting} from "../../../shared/interfaces/store/state/routing/app-routing.interface";

export class URouting {

  public static reduceAppRoutingState(state: IAppRouting, route: string, status: boolean): IAppRouting {
    return {
      ...state,
      [route]: {
        isActive: status
      }
    };
  }

}
