import {Component} from "@angular/core";
import {combineLatest, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

import {IRouterButton} from "../../shared/interfaces/router/router-button.interface";
import {IDashboardCategoryList} from "../../shared/interfaces/category/dashboard-category-list.interface";

import {DashboardNotFoundConstant} from "../../core/constant/components/dashboard/dashboard-not-found.constant";

import {SDashboard} from "../../core/store/selectors/dashboard/dashboard.selectors";

import {TogglePreviewRouting} from "../../core/store/actions/routing/routing.actions";

@Component({
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <ng-container *ngIf="(categoryPatterns$ | async).length > 0; else empty">
      <mat-card *ngFor="let patterns of categoryPatterns$ | async" class="category">
        <mat-card-title>{{patterns.categoryName}}</mat-card-title>
        <div class="patterns">
          <div class="pattern" *ngFor="let pattern of patterns.content" (click)="navigateTo(pattern.route)">
            <app-card [data]="pattern" class="pattern__item"></app-card>
          </div>
        </div>
      </mat-card>
    </ng-container>

    <ng-template #empty>
      <mat-card class="full-page">
        <app-not-found [message]="notFoundMessage" [button]="notFoundButton"></app-not-found>
      </mat-card>
    </ng-template>
  `
})
export class DashboardComponent {

  public notFoundButton: IRouterButton = DashboardNotFoundConstant.getLinkInfo;
  public notFoundMessage = DashboardNotFoundConstant.getMessage;

  private createPatterns$: Observable<IDashboardCategoryList> = this._store.select(SDashboard.createPatterns.selectCategory);
  private structurePatterns$: Observable<IDashboardCategoryList> = this._store.select(SDashboard.structurePatterns.selectCategory);

  public categoryPatterns$: Observable<IDashboardCategoryList[]> = combineLatest([
    this.createPatterns$,
    this.structurePatterns$
  ])
    .pipe(
      map(list => list.filter(c => c.content.length > 0))
    );

  constructor(
    private _store: Store,
    private _router: Router,
  ) {
  }

  public navigateTo(route: Array<string>): void {
    this._router.navigate(route);
    this._store.dispatch(TogglePreviewRouting({status: true}));
  }
}
