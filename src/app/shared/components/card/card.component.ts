import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {IDashboardCard} from "../../../core/interfaces/components/card/dashboard-card.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input()
  public data: IDashboardCard;

  @Input()
  public isClick: boolean;

  @Input()
  public classList: Array<string>

}
