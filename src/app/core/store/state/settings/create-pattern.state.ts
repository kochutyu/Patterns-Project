import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";

import {ECreatePatternStorage} from "../../../enums/storage/settings/create-pattern-storage.enum";
import {ECreatePattern} from "../../../enums/patterns/create-pattern/create-pattern.enum";

import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {ICheckboxPattern} from "../../../interfaces/components/form/checkbox-pattern.interface";

export const initialFactoryPatternState: ICheckboxPattern = {
  id: 'create-pattern-1',
  value: ECreatePattern.FACTORY,
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.FACTORY_STATE, true)
};

export const initialBuilderPatternState: ICheckboxPattern = {
  id: 'create-pattern-2',
  value: ECreatePattern.BUILDER,
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.BUILDER_STATE, false)
};

export const initialCreatePatternState: ICreatePatternState = {
  factoryPattern: initialFactoryPatternState,
  builderPattern: initialBuilderPatternState
};
