import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { img: string; title?: string }
  ) {
  }

}
