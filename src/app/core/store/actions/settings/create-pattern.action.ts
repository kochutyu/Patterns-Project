import {createAction} from "@ngrx/store";

// Factory
export const TurnOnFactoryPatternAction = createAction('[Settings] Turn On Factory Pattern');
export const TurnOffFactoryPatternAction = createAction('[Settings] Turn Off Factory Pattern');

// Builder
export const TurnOnBuilderPatternAction = createAction('[Settings] Turn On Builder Pattern');
export const TurnOffBuilderPatternAction = createAction('[Settings] Turn Off Builder Pattern');
