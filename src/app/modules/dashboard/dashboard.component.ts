import {ChangeDetectionStrategy, Component} from "@angular/core";
import {combineLatest, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SDashboard} from "../../core/store/selectors/dashboard/dashboard.selectors";
import {IDashboardCategoryList} from "../../core/interfaces/category/dashboard-category-list.interface";
import {map} from "rxjs/operators";
import {IRouterButton} from "../../core/interfaces/router/router-button.interface";
import {NavbarService} from "../../core/services/navbar.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <ng-container *ngIf="(categoryPatterns$ | async).length > 0; else empty">
      <mat-card *ngFor="let patterns of categoryPatterns$ | async" class="category">
        <mat-card-title>{{patterns.categoryName}}</mat-card-title>
        <div class="patterns">
          <div class="pattern" *ngFor="let pattern of patterns.content">
            <app-card [data]="pattern" class="pattern__item"></app-card>
          </div>
        </div>
      </mat-card>
    </ng-container>

    <ng-template #empty>
      <mat-card class="full-page">
        <app-not-found [message]="notFoundMessage" [button]="notFoundButton" (onRoute)="updateNavbar()"></app-not-found>
      </mat-card>
    </ng-template>
  `
})
export class DashboardComponent {

  public notFoundButton: IRouterButton = {
    route: '/settings',
    name: 'Go to settings'
  }
  public notFoundMessage = 'Patterns not found!';
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
    private _navbar: NavbarService
  ) {
    this.categoryPatterns$.subscribe(console.log);
  }

  public updateNavbar(): void {
    this._navbar.updateTabLink();
  }
}
