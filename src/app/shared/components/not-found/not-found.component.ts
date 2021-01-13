import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IRouterButton} from "../../../core/interfaces/router/router-button.interface";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  @Input() message: string;
  @Input() button: IRouterButton;

}
