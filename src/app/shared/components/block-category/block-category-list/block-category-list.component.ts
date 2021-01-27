import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

import {IBlockCategoryList} from "../../../interfaces/category/block-category-list.interface";

@Component({
  selector: 'app-block-category-list',
  styleUrls: ['./block-category-list.component.scss'],
  template: `
    <app-block-category [blockName]="list.blockName" *ngIf="list">
      <section class="select-list">
          <span *ngFor="let li of list.content">
            <mat-slide-toggle [checked]="li.isChecked" [id]="li.id"
                              (change)="onChange($event)">{{li.value}}</mat-slide-toggle>
          </span>
      </section>
    </app-block-category>
  `
})
export class BlockCategoryListComponent {

  @Input()
  list: IBlockCategoryList;

  @Output()
  onChangeEvent: EventEmitter<MatSlideToggleChange> = new EventEmitter<MatSlideToggleChange>();

  public onChange(event: MatSlideToggleChange): void {
    this.onChangeEvent.emit(event);
  }

}
