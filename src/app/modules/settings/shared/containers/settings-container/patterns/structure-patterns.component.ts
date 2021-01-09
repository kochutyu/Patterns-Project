import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../../core/interfaces/store/state/app-state.interface";
import {IBlockCategoryList} from "../../../../../../core/interfaces/category/block-category-list.interface";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction
} from "../../../../../../core/store/actions/settings/structure-pattern.action";
import {selectStructurePatternsPipe} from "../../../../../../core/store/selectors/settings/structure-pattern.selectors";

@Component({
  selector: 'app-structure-patterns',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-block-category-list [list]="structurePatterns$ | async"
                             (onChangeEvent)="dispatchPattern($event)">
    </app-block-category-list>
  `
})
export class StructurePatternsComponent {

  public structurePatterns$: Observable<IBlockCategoryList> = this._store.pipe(selectStructurePatternsPipe);

  constructor(
    private _store: Store<IAppState>
  ) {
  }

  handleAdapter(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnAdapterPatternAction()) :
      this._store.dispatch(TurnOffAdapterPatternAction());
  }

  handleBridge(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnBridgePatternAction()) :
      this._store.dispatch(TurnOffBridgePatternAction());
  }

  handleComposite(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnCompositePatternAction()) :
      this._store.dispatch(TurnOffCompositePatternAction());
  }

  dispatchPattern(event: MatSlideToggleChange): void {
    switch (event.source.id) {
      case 'structure-pattern-1':
        this.handleAdapter(event.checked);
        break;
      case 'structure-pattern-2':
        this.handleBridge(event.checked);
        break;
      case 'structure-pattern-3':
        this.handleComposite(event.checked);
        break;
    }
  }

}
