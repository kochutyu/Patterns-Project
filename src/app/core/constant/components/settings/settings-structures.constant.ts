import {IBlockCategoryList} from "../../../interfaces/block-category-list.interface";

export class SettingsStructuresConstant {
  static get getBlockCategory(): IBlockCategoryList {
    return {
      blockName: 'Structure',
      content: [
        'Adapter',
        'Bridge',
        'Composite'
      ]
    }
  }
}
