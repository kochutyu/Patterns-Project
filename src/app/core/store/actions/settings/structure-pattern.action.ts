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
