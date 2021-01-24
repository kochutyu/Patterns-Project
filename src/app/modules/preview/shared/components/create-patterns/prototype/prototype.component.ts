import {ChangeDetectionStrategy, Component} from "@angular/core";


@Component({
  styleUrls: ['./prototype.component.scss', '../../../../preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    prototype
  `
})
export class PrototypeComponent {

}
