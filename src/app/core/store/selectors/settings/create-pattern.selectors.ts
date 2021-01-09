import {createSelector, select} from "@ngrx/store";
import {IAppState} from "../../../interfaces/store/state/app-state.interface";
import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
import {ICheckbox} from "../../../interfaces/components/form/checkbox.interface";

const selectPatternState = (state: IAppState) => state.settingsCreatePatterns;

export const selectCreatePatterns = createSelector(
  selectPatternState,
  (state: ICreatePatternState): ICreatePatternState => state
);


export const selectFactoryPattern = createSelector(
  selectPatternState,
  (state: ICreatePatternState): ICheckbox => state.factoryPattern
);

export const selectBuilderPattern = createSelector(
  selectPatternState,
  (state: ICreatePatternState): ICheckbox => state.builderPattern
);

export const selectCreatePatternsPipe = pipe(
  select(selectCreatePatterns),
  map((v): Array<ICheckbox> => Object.keys(v).map(key => v[key])),
  map((patterns) => {
    return {
      blockName: 'Creation Design Pattern',
      content: patterns
    }
  })
)
