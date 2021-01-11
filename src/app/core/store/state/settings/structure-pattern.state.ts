import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";
import {EStructurePatternStorage} from "../../../enums/storage/settings/structure-pattern-storage.enum";
import {ICheckboxPattern} from "../../../interfaces/components/form/checkbox-pattern.interface";
import {EStructurePattern} from "../../../enums/patterns/structure-pattern/structure-pattern.enum";

export const initialAdapterPatternState: ICheckboxPattern = {
  id: 'structure-pattern-1',
  value: EStructurePattern.ADAPTER,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.ADAPTER_STATE, false)
};

export const initialBridgePatternState: ICheckboxPattern = {
  id: 'structure-pattern-2',
  value: EStructurePattern.BRIDGE,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.BRIDGE_STATE, false)
};

export const initialCompositePatternState: ICheckboxPattern = {
  id: 'structure-pattern-3',
  value: EStructurePattern.COMPOSITE,
  isChecked: PatternStateStorage.getState(EStructurePatternStorage.COMPOSITE_STATE, false)
};

export const initialStructurePatternState: IStructurePatternState = {
  adapterPattern: initialAdapterPatternState,
  bridgePattern: initialBridgePatternState,
  compositePattern: initialCompositePatternState
};
