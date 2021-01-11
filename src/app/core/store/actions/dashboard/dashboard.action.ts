import {createAction, props} from "@ngrx/store";


export const UpdateDashboardCreatePattern = createAction(
  '[Dashboard] Update Create Pattern Dashboard',
  props<{ id: any }>()
);

export const UpdateDashboardStructurePattern = createAction(
  '[Dashboard] Update Structure Pattern Dashboard',
  props<{ id: any }>()
);
