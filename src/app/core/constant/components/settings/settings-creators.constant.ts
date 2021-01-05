import {IBlockCategoryList} from "../../../interfaces/block-category-list.interface";

export class SettingsCreatorsConstant {
  static get getBlockCategory(): IBlockCategoryList {
    return {
      blockName: 'Creation',
      content: [
        'Abstract factory / factory method *',
        'Builder',
      ]
    }
  }
}
