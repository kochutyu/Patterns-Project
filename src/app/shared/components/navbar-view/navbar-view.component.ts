import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {ITabLink} from "../../../core/interfaces/components/tabs/tab-link.interface";
import {IRouterLinkWithIndex} from "../../../core/interfaces/router/router-link-with-index.interface";
import {Router} from "@angular/router";
import {NavbarTabLinkConstant} from "../../../core/constant/components/navbar/navbar-tab-link.constant";
import {asLink} from "../../../core/utils/router/router-link.utils";
import {NavbarService} from "../../../core/services/navbar.service";
import {Subject, timer} from "rxjs";
import {tap} from "rxjs/operators";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html'
})
export class NavbarViewComponent implements AfterViewInit, OnDestroy, IRouterLinkWithIndex {

  public tabs: Array<ITabLink> = NavbarTabLinkConstant.getTabLink;
  public selectedTabIndex: number = 0;


  public form: FormGroup;

  private destroySubject$: Subject<void> = new Subject<void>();

  private url: string;

  constructor(
    private _router: Router,
    private _navbar: NavbarService
  ) {
  }

  ngAfterViewInit() {
    this.initUrl();
    this.initUpdateTabLinkChanges();
    this._navbar.updateTabLink();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  public navigateTo(index: number): void {
    this.selectedTabIndex = index;
    this._router.navigate(this.tabs[index].route);
  }

  initUpdateTabLinkChanges(): void {
    this._navbar.observeForTabLinkChange$
      .subscribe(_ => this.initSelectedRoute());
  }

  private initSelectedRoute(): void {


    /**
     * Find URL
     */
    if (!this.url) {
      timer(100).subscribe(_ => {
        this.initSelectedRoute();
      });
      return;
    }

    /**
     * Find index for TabLink
     */
    const index = this.tabs.findIndex(t =>
      (asLink(this.url).toLowerCase() === t.name.toLowerCase())
    );

    if (index > -1) {
      this.selectedTabIndex = index;
    }
  }

  private initUrl(): void {
    this._router.events.pipe(
      tap((route: any) => {
        if (route.url) {
          this.url = route.url;
          this.initSelectedRoute();
        }
      }),
    ).subscribe();
  }

}
