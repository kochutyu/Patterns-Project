import {Component, Input} from '@angular/core';

import {IDashboardCard} from "../../../core/interfaces/components/card/dashboard-card.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  data: IDashboardCard;

}
