import {ICheckbox} from "../../../interfaces/components/form/checkbox.interface";
import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";
import {ECreatePatternStorage} from "../../../enums/storage/settings/create-pattern-storage.enum";
// import {ECreatePatternStorage} from "../../../enums/storage/settings/create-pattern-storage.enum";

export const initialFactoryPatternState: ICheckbox = {
  id: 'create-pattern-1',
  value: 'Factory',
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.FACTORY_STATE, true)
};

export const initialBuilderPatternState: ICheckbox = {
  id: 'create-pattern-2',
  value: 'Builder',
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.BUILDER_STATE, false)
};

export const initialCreatePatternState: ICreatePatternState = {
  factoryPattern: initialFactoryPatternState,
  builderPattern: initialBuilderPatternState
};
