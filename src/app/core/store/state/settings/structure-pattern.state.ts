import {IStructurePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";
import {EStructurePatternStorage} from "../../../../shared/enums/storage/settings/structure-pattern-storage.enum";
import {ICheckboxPattern} from "../../../../shared/interfaces/components/form/checkbox-pattern.interface";
import {EStructurePattern} from "../../../../shared/enums/patterns/structure-pattern/structure-pattern.enum";

export const initialAdapterPatternState: ICheckboxPattern = {
  id: 'structure-pattern-1',
  value: EStructurePattern.ADAPTER,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.ADAPTER_STATE, true)
};

export const initialBridgePatternState: ICheckboxPattern = {
  id: 'structure-pattern-2',
  value: EStructurePattern.BRIDGE,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.BRIDGE_STATE, true)
};

export const initialCompositePatternState: ICheckboxPattern = {
  id: 'structure-pattern-3',
  value: EStructurePattern.COMPOSITE,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.COMPOSITE_STATE, true)
};

export const initialDecoratorPatternState: ICheckboxPattern = {
  id: 'structure-pattern-4',
  value: EStructurePattern.DECORATOR,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.DECORATOR, true)
};

export const initialFacadePatternState: ICheckboxPattern = {
  id: 'structure-pattern-5',
  value: EStructurePattern.FACADE,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.FACADE, true)
};

export const initialFlyweightPatternState: ICheckboxPattern = {
  id: 'structure-pattern-6',
  value: EStructurePattern.FLYWEIGHT,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.FLYWEIGHT, true)
};

export const initialProxyPatternState: ICheckboxPattern = {
  id: 'structure-pattern-7',
  value: EStructurePattern.PROXY,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.PROXY, true)
};

export const initialStructurePatternState: IStructurePatternState = {
  adapterPattern: initialAdapterPatternState,
  bridgePattern: initialBridgePatternState,
  compositePattern: initialCompositePatternState,
  decoratorPattern: initialDecoratorPatternState,
  facadePattern: initialFacadePatternState,
  flyweightPattern: initialFlyweightPatternState,
  proxyPattern: initialProxyPatternState
};
