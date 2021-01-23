import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="template">
      <div class="navbar">
        <app-navbar-view></app-navbar-view>
      </div>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {

  constructor(
    private _router: Router,
  ) {
  }
}
