import {Component, Input} from '@angular/core';
import {IBlockCategoryList} from "../../../../core/interfaces/block-category-list.interface";

@Component({
  selector: 'app-block-category-list',
  template: `
    <app-block-category [blockName]="list.blockName">
      <section class="select-list">
          <span *ngFor="let li of list.content">
            <mat-slide-toggle>{{li}}</mat-slide-toggle>
          </span>
      </section>
    </app-block-category>
  `,
  styleUrls: ['./block-category-list.component.scss']
})
export class BlockCategoryListComponent {

  @Input() list: IBlockCategoryList;

}
