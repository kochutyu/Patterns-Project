import {Component} from "@angular/core";

@Component({
  styleUrls: ['./preview.component.scss'],
  template: `
    <mat-card class="category">
      <router-outlet></router-outlet>
    </mat-card>
  `
})
export class PreviewComponent {
}
