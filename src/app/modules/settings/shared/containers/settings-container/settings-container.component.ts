import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-settings-container',
  styleUrls: ['../../../settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-create-patterns class="space-bottom"></app-create-patterns>
    <app-structure-patterns></app-structure-patterns>
  `
})
export class SettingsContainerComponent {
}
