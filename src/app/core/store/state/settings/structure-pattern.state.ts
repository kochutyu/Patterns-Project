import {ICheckbox} from "../../../interfaces/components/form/checkbox.interface";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";
import {EStructurePatternStorage} from "../../../enums/storage/settings/structure-pattern-storage.enum";

export const initialAdapterPatternState: ICheckbox = {
  id: 'structure-pattern-1',
  value: 'Adapter',
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.ADAPTER_STATE, false)
};

export const initialBridgePatternState: ICheckbox = {
  id: 'structure-pattern-2',
  value: 'Bridge',
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.BRIDGE_STATE, false)
};

export const initialCompositePatternState: ICheckbox = {
  id: 'structure-pattern-3',
  value: 'Composite',
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.COMPOSITE_STATE, false)
};

export const initialStructurePatternState: IStructurePatternState = {
  adapterPattern: initialAdapterPatternState,
  bridgePattern: initialBridgePatternState,
  compositePattern: initialCompositePatternState
};
