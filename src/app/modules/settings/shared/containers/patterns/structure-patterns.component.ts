import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOffDecoratorPatternAction,
  TurnOffFacadePatternAction,
  TurnOffFlyweightPatternAction,
  TurnOffProxyPatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction,
  TurnOnDecoratorPatternAction,
  TurnOnFacadePatternAction, TurnOnFlyweightPatternAction, TurnOnProxyPatternAction
} from "../../../../../core/store/actions/settings/structure-pattern.action";

import {SSettings} from "../../../../../core/store/selectors/settings/settings.selectors";

import {IAppState} from "../../../../../core/interfaces/store/state/app-state.interface";
import {IBlockCategoryList} from "../../../../../core/interfaces/category/block-category-list.interface";

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

  public structurePatterns$: Observable<IBlockCategoryList> = this._store.pipe(SSettings.structurePatterns.selectBlockListPipe);

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

  handleDecorator(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnDecoratorPatternAction()) :
      this._store.dispatch(TurnOffDecoratorPatternAction());
  }

  handleFacade(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnFacadePatternAction()) :
      this._store.dispatch(TurnOffFacadePatternAction());
  }

  handleFlyweight(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnFlyweightPatternAction()) :
      this._store.dispatch(TurnOffFlyweightPatternAction());
  }

  handleProxy(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnProxyPatternAction()) :
      this._store.dispatch(TurnOffProxyPatternAction());
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
      case 'structure-pattern-4':
        this.handleDecorator(event.checked);
        break;
      case 'structure-pattern-5':
        this.handleFacade(event.checked);
        break;
      case 'structure-pattern-6':
        this.handleFlyweight(event.checked);
        break;
      case 'structure-pattern-7':
        this.handleProxy(event.checked);
        break;
    }
  }

}
