import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITabLink} from "../../../core/interfaces/components/tabs/tab-link.interface";
import {IRouterLinkWithIndex} from "../../../core/interfaces/router/router-link-with-index.interface";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {NavbarTabLinkConstant} from "../../../core/constant/components/navbar/navbar-tab-link.constant";
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {SAppRouting} from "../../../core/store/selectors/routing/app-routing.selectors";
import {filter, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html'
})
export class NavbarViewComponent implements OnInit, OnDestroy, IRouterLinkWithIndex {

  public tabs: Array<ITabLink> = NavbarTabLinkConstant.getTabLink;

  public selectedTabIndex: number = 1;

  public disabledTab$: Observable<boolean> = this._store.select(SAppRouting.preview.selectActiveStatus);

  private destroySubject$: Subject<void> = new Subject<void>();

  constructor(
    private _store: Store,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  private get getTabIndex(): number {
    return this.tabs.findIndex((tab) => this._router.url.includes(tab.path))
  }

  ngOnInit() {
    this.initTabActiveRoute();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  public navigateTo(index: number): void {
    this.selectTabByClick(index);
  }

  private initTabActiveRoute(): void {
    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      tap(this.selectTabByIndex.bind(this)),
      takeUntil(this.destroySubject$)
    ).subscribe();
  }

  private selectTabByIndex(): void {
    this.selectedTabIndex = this.getTabIndex;
  }

  private selectTabByClick(index: number): void {
    if (index !== this.selectedTabIndex) {
      this.selectedTabIndex = index;
      this._router.navigate(this.tabs[index].route);
    }
  }
}
