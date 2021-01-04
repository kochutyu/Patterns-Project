import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="template">
      <app-navbar-view></app-navbar-view>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent {
}
