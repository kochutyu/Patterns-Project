import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
  styleUrls: ['./singleton.component.scss', '../../../../preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    singleton
  `
})
export class SingletonComponent {
}
