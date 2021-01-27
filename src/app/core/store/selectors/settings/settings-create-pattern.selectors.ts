import {map} from "rxjs/operators";
import {pipe} from "rxjs";
import {createSelector, select} from "@ngrx/store";

import {IAppState} from "../../../../shared/interfaces/store/state/app-state.interface";
import {ICheckboxPattern} from "../../../../shared/interfaces/components/form/checkbox-pattern.interface";
import {ICreatePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/structure-pattern-state.interface";


export class SettingsCreatePatternSelectors {

  public static selectCategory = createSelector(
    SettingsCreatePatternSelectors.selectPatternState,
    (state: ICreatePatternState | IStructurePatternState) => state
  );

  public static selectAbstractFactoryPattern = createSelector(
    SettingsCreatePatternSelectors.selectPatternState,
    (state: ICreatePatternState): ICheckboxPattern => state.abstractFactoryPattern
  );

  public static selectFactoryMethodPattern = createSelector(
    SettingsCreatePatternSelectors.selectPatternState,
    (state: ICreatePatternState): ICheckboxPattern => state.factoryMethodPattern
  );

  public static selectBuilderPattern = createSelector(
    SettingsCreatePatternSelectors.selectPatternState,
    (state: ICreatePatternState): ICheckboxPattern => state.builderPattern
  );

  public static selectPrototypePattern = createSelector(
    SettingsCreatePatternSelectors.selectPatternState,
    (state: ICreatePatternState): ICheckboxPattern => state.prototypePattern
  );

  public static selectSingletonPattern = createSelector(
    SettingsCreatePatternSelectors.selectPatternState,
    (state: ICreatePatternState): ICheckboxPattern => state.singletonPattern
  );

  public static selectBlockListPipe = pipe(
    select(SettingsCreatePatternSelectors.selectCategory),
    map((v): Array<ICheckboxPattern> => Object.keys(v).map(key => v[key])),
    map((patterns) => {
      return {
        blockName: 'Creation Design Pattern',
        content: patterns
      }
    })
  )

  static selectPatternState(state: IAppState): ICreatePatternState | IStructurePatternState {
    return state.settingsCreatePatterns;
  }

}
