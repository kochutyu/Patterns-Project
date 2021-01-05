import {Component} from "@angular/core";
import {SettingsCreatorsConstant} from "../../core/constant/components/settings/settings-creators.constant";
import {SettingsStructuresConstant} from "../../core/constant/components/settings/settings-structures.constant";

@Component({
  template: `
    <div class="settings">
      <div class="category-list">
        <app-block-category-list [list]="pattern" *ngFor="let pattern of patterns"></app-block-category-list>
      </div>
    </div>
  `,
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  public patterns = [
    SettingsCreatorsConstant.getBlockCategory,
    SettingsStructuresConstant.getBlockCategory
  ]

}
