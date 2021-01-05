import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block-category',
  template: `
    <div class="block-category">
      <div class="block-category__title">
        {{blockName}}
      </div>
      <div class="block-category__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./block-category.component.scss']
})
export class BlockCategoryComponent {

  @Input() blockName: string = 'Block';

}
