import {AfterViewInit, Component} from '@angular/core';
import {ITabLink} from "../../../core/interfaces/components/tabs/tab-link.interface";
import {IRouterLinkWithIndex} from "../../../core/interfaces/router/router-link-with-index.interface";
import {Router} from "@angular/router";
import {NavbarTabLinkConstant} from "../../../core/constant/components/navbar/navbar-tab-link.constant";
import {convertRouteStringToString} from "../../../core/transform/router/router-link.transform";

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html'
})
export class NavbarViewComponent implements AfterViewInit, IRouterLinkWithIndex {

  public tabs: Array<ITabLink> = NavbarTabLinkConstant.getTabLink;
  public selectedTabIndex: number = 0;

  constructor(
    private _router: Router
  ) {
  }

  private get getActiveRoute(): string {
    return this._router.url.split('/')
      .filter(v => !!v)
      .find((v, i) => i == 0);
  }

  ngAfterViewInit() {
    this.initSelectedRoute();
  }

  public navigateTo(index: number): void {
    this.selectedTabIndex = index;
    this._router.navigate(this.tabs[index].route);
  }

  private initSelectedRoute(): void {
    const interval = setInterval(() => {
      if (this.getActiveRoute) {
        const index = this.tabs.findIndex(t =>
          (convertRouteStringToString(this.getActiveRoute).toLowerCase() === t.name.toLowerCase())
        );

        if (!!index) {
          this.selectedTabIndex = index;
        }
        clearInterval(interval);
      }
    }, 100);
  }

}
