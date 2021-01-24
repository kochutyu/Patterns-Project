import {map} from "rxjs/operators";
import {pipe} from "rxjs";
import {createSelector, select} from "@ngrx/store";

import {IAppState} from "../../../interfaces/store/state/app-state.interface";
import {ICheckboxPattern} from "../../../interfaces/components/form/checkbox-pattern.interface";
import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";

export class SettingsStructurePatternSelectors {

  public static selectCategory = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState) => state
  );

  public static selectAdapterPattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.adapterPattern
  );

  public static selectBridgePattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.bridgePattern
  );

  public static selectCompositePattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.compositePattern
  );

  public static selectDecoratorPattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.decoratorPattern
  );

  public static selectFacadePattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.facadePattern
  );

  public static selectFlyweightPattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.flyweightPattern
  );

  public static selectProxyPattern = createSelector(
    SettingsStructurePatternSelectors.selectPatternState,
    (state: IStructurePatternState): ICheckboxPattern => state.proxyPattern
  );

  public static selectBlockListPipe = pipe(
    select(SettingsStructurePatternSelectors.selectCategory),
    map((v): Array<ICheckboxPattern> => Object.keys(v).map(key => v[key])),
    map((patterns) => {
      return {
        blockName: 'Structure Design Pattern',
        content: patterns
      }
    })
  )

  static selectPatternState(state: IAppState): ICreatePatternState | IStructurePatternState {
    return state.settingsStructurePatterns;
  }

}
