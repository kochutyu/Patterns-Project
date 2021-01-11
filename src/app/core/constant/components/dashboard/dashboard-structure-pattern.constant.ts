import {EStructurePattern} from "../../../enums/patterns/structure-pattern/structure-pattern.enum";
import {EStructurePatternImg} from "../../../enums/patterns/structure-pattern/structure-pattern-img.enum";

import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";


export class DashboardStructurePatternConstant {

  static get getPatternsList(): IDashboardCategoryList {
    return {
      categoryName: 'Structure Design Patterns',
      content: [
        {
          id: EStructurePattern.ADAPTER,
          title: EStructurePattern.ADAPTER,
          imgSrc: EStructurePatternImg.ADAPTER
        },
        {
          id: EStructurePattern.BRIDGE,
          title: EStructurePattern.BRIDGE,
          imgSrc: EStructurePatternImg.BRIDGE
        },
        {
          id: EStructurePattern.COMPOSITE,
          title: EStructurePattern.COMPOSITE,
          imgSrc: EStructurePatternImg.COMPOSITE
        }
      ]
    }
  }

  static get initialState(): IDashboardCategoryList {
    return {
      categoryName: 'Structure Design Patterns',
      content: []
    }
  }

}
