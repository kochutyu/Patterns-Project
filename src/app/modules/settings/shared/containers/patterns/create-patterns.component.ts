import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../core/interfaces/store/state/app-state.interface";
import {
  TurnOffAbstractFactoryPatternAction,
  TurnOffBuilderPatternAction, TurnOffFactoryMethodPatternAction, TurnOnAbstractFactoryPatternAction,
  TurnOnBuilderPatternAction, TurnOnFactoryMethodPatternAction,
} from "../../../../../core/store/actions/settings/create-pattern.action";
import {IBlockCategoryList} from "../../../../../core/interfaces/category/block-category-list.interface";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {SSettings} from "../../../../../core/store/selectors/settings/settings.selectors";

@Component({
  selector: 'app-create-patterns',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-block-category-list [list]="createPatterns$ | async"
                             (onChangeEvent)="dispatchPattern($event)">
    </app-block-category-list>
  `
})
export class CreatePatternsComponent {

  public createPatterns$: Observable<IBlockCategoryList> = this._store.pipe(SSettings.createPatterns.selectBlockListPipe);

  constructor(
    private _store: Store<IAppState>
  ) {
  }

  handleAbstractFactory(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnAbstractFactoryPatternAction()) :
      this._store.dispatch(TurnOffAbstractFactoryPatternAction());
  }

  handleFactoryMethod(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnFactoryMethodPatternAction()) :
      this._store.dispatch(TurnOffFactoryMethodPatternAction());
  }

  handleBuilder(state: boolean): void {
    state ?
      this._store.dispatch(TurnOnBuilderPatternAction()) :
      this._store.dispatch(TurnOffBuilderPatternAction());
  }

  dispatchPattern(event: MatSlideToggleChange): void {
    switch (event.source.id) {
      case 'create-pattern-1':
        this.handleAbstractFactory(event.checked);
        break;
      case 'create-pattern-2':
        this.handleFactoryMethod(event.checked);
        break;
      case 'create-pattern-3':
        this.handleBuilder(event.checked);
        break;
    }
  }

}
