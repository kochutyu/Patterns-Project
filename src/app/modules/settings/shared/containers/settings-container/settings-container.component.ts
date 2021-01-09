import {Component} from '@angular/core';

@Component({
  selector: 'app-settings-container',
  styleUrls: ['../../../settings.component.scss'],
  template: `
    <app-create-patterns></app-create-patterns>
    <app-structure-patterns></app-structure-patterns>
  `
})
export class SettingsContainerComponent {
}
