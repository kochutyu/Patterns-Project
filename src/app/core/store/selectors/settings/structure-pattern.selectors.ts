import {createSelector, select} from "@ngrx/store";
import {IAppState} from "../../../interfaces/store/state/app-state.interface";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
import {ICheckbox} from "../../../interfaces/components/form/checkbox.interface";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";

const selectPatternState = (state: IAppState) => state.settingsStructurePatterns;

export const selectStructurePatterns = createSelector(
  selectPatternState,
  (state: IStructurePatternState): IStructurePatternState => state
);

export const selectAdapterPattern = createSelector(
  selectPatternState,
  (state: IStructurePatternState): ICheckbox => state.adapterPattern
);

export const selectBridgePattern = createSelector(
  selectPatternState,
  (state: IStructurePatternState): ICheckbox => state.bridgePattern
);

export const selectCompositePattern = createSelector(
  selectPatternState,
  (state: IStructurePatternState): ICheckbox => state.compositePattern
);

export const selectStructurePatternsPipe = pipe(
  select(selectStructurePatterns),
  map((v): Array<ICheckbox> => Object.keys(v).map(key => v[key])),
  map((patterns) => {
    return {
      blockName: 'Structure Design Pattern',
      content: patterns
    }
  })
)
