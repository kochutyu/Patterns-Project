import {createAction} from "@ngrx/store";


// Adapter
export const TurnOnAdapterPatternAction = createAction('[Settings] Turn On Adapter Pattern');
export const TurnOffAdapterPatternAction = createAction('[Settings] Turn Off Adapter Pattern');

// Bridge
export const TurnOnBridgePatternAction = createAction('[Settings] Turn On Bride Pattern');
export const TurnOffBridgePatternAction = createAction('[Settings] Turn Off Bride Pattern');

// Composite
export const TurnOnCompositePatternAction = createAction('[Settings] Turn On Composite Pattern');
export const TurnOffCompositePatternAction = createAction('[Settings] Turn Off Composite Pattern');

// Decorator
export const TurnOnDecoratorPatternAction = createAction('[Settings] Turn On Decorator Pattern');
export const TurnOffDecoratorPatternAction = createAction('[Settings] Turn Off Decorator Pattern');

// Facade
export const TurnOnFacadePatternAction = createAction('[Settings] Turn On Facade Pattern');
export const TurnOffFacadePatternAction = createAction('[Settings] Turn Off Facade Pattern');

// Flyweight
export const TurnOnFlyweightPatternAction = createAction('[Settings] Turn On Flyweight Pattern');
export const TurnOffFlyweightPatternAction = createAction('[Settings] Turn Off Flyweight Pattern');

// Proxy
export const TurnOnProxyPatternAction = createAction('[Settings] Turn On Proxy Pattern');
export const TurnOffProxyPatternAction = createAction('[Settings] Turn Off Proxy Pattern');
