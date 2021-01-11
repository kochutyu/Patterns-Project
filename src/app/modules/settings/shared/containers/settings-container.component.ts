import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-settings-container',
  styleUrls: ['../../settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card class="space-bottom">
      <app-create-patterns></app-create-patterns>
    </mat-card>
    <mat-card>
      <app-structure-patterns></app-structure-patterns>
    </mat-card>
  `
})
export class SettingsContainerComponent {
}
