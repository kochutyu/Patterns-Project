import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ITabLink} from "../../../../core/interfaces/tabs/tab-link.interface";
import {NavbarModuleConstant} from "../../../../core/constant/components/navbar/navbar-module.constant";
import {IRouterLinkWithIndex} from "../../../../core/interfaces/link/router-link-with-index.interface";
import {Router} from "@angular/router";
import {RouterLinkConvert} from "../../../../core/convert/router-link.convert";

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html'
})
export class NavbarViewComponent implements OnInit, AfterViewInit, IRouterLinkWithIndex {

  public tabs: Array<ITabLink> = NavbarModuleConstant.getTabLink;
  public selectedTabIndex: number = 0;

  constructor(
    private router: Router
  ) {
  }

  private get getActiveRoute(): string {
    return this.router.url.split('/')
      .filter(v => !!v)
      .find((v, i) => i == 0);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initSelectedRoute();
  }

  public navigateTo(index: number): void {
    this.selectedTabIndex = index;
    this.router.navigate(this.tabs[index].route);
  }

  private initSelectedRoute(): void {
    const interval = setInterval(() => {
      if (this.getActiveRoute) {
        const index = this.tabs.findIndex(t =>
          (RouterLinkConvert.convertRouteStringToString(this.getActiveRoute).toLowerCase() === t.name.toLowerCase())
        );

        if (!!index) {
          this.selectedTabIndex = index;
        }
        clearInterval(interval);
      }
    }, 100);
  }

}
