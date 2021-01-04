import {Router} from "@angular/router";

export abstract class NavigateTo {

  constructor(
    public router: Router
  ) {
  }

  public navigateTo(route: Array<string>): void {
    this.router.navigate(route);
  }
}
