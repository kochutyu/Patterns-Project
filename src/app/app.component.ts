import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="template">
      <app-navbar-view></app-navbar-view>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
}
