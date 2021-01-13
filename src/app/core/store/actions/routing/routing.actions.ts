import {createAction, props} from "@ngrx/store";

export const TogglePreviewRouting = createAction(
  '[Preview] Turn On/Off Routing',
  props<{ status: boolean }>()
);
