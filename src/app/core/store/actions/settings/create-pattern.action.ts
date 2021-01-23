import {createAction} from "@ngrx/store";


// Abstract Factory
export const TurnOnAbstractFactoryPatternAction = createAction('[Settings] Turn On Abstract Factory Pattern');
export const TurnOffAbstractFactoryPatternAction = createAction('[Settings] Turn Off Abstract Factory Pattern');

// Factory Method
export const TurnOnFactoryMethodPatternAction = createAction('[Settings] Turn On Factory Method Pattern');
export const TurnOffFactoryMethodPatternAction = createAction('[Settings] Turn Off Factory Method Pattern');

// Builder
export const TurnOnBuilderPatternAction = createAction('[Settings] Turn On Builder Pattern');
export const TurnOffBuilderPatternAction = createAction('[Settings] Turn Off Builder Pattern');
