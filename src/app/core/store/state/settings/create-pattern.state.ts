import {PatternStateStorage} from "../../../storage/routs/pattern-state.storage";

import {ECreatePatternStorage} from "../../../enums/storage/settings/create-pattern-storage.enum";
import {ECreatePattern} from "../../../enums/patterns/create-pattern/create-pattern.enum";

import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {ICheckboxPattern} from "../../../interfaces/components/form/checkbox-pattern.interface";

export const initialAbstractFactoryPatternState: ICheckboxPattern = {
  id: 'create-pattern-1',
  value: ECreatePattern.ABSTRACT_FACTORY,
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.ABSTRACT_FACTORY, true)
};

export const initialFactoryMethodPatternState: ICheckboxPattern = {
  id: 'create-pattern-2',
  value: ECreatePattern.FACTORY_METHOD,
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.FACTORY_METHOD, true)
};

export const initialBuilderPatternState: ICheckboxPattern = {
  id: 'create-pattern-3',
  value: ECreatePattern.BUILDER,
  isChecked: PatternStateStorage.getState(ECreatePatternStorage.BUILDER_STATE, false)
};

export const initialCreatePatternState: ICreatePatternState = {
  abstractFactoryPattern: initialAbstractFactoryPatternState,
  factoryMethodPattern: initialFactoryMethodPatternState,
  builderPattern: initialBuilderPatternState
};
