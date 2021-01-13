import {EStructurePattern} from "../../../enums/patterns/structure-pattern/structure-pattern.enum";
import {EStructurePatternImg} from "../../../enums/patterns/structure-pattern/structure-pattern-img.enum";

import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {StructurePatternRoutingConstant} from "../../routing/preview/structure-pattern-routing.constant";


export class DashboardStructurePatternConstant {

  static get getPatternsList(): IDashboardCategoryList {
    return {
      categoryName: 'Structure Design Patterns',
      content: [
        {
          id: EStructurePattern.ADAPTER,
          title: EStructurePattern.ADAPTER,
          imgSrc: EStructurePatternImg.ADAPTER,
          route: StructurePatternRoutingConstant.getAdapter.route
        },
        {
          id: EStructurePattern.BRIDGE,
          title: EStructurePattern.BRIDGE,
          imgSrc: EStructurePatternImg.BRIDGE,
          route: StructurePatternRoutingConstant.getBridge.route
        },
        {
          id: EStructurePattern.COMPOSITE,
          title: EStructurePattern.COMPOSITE,
          imgSrc: EStructurePatternImg.COMPOSITE,
          route: StructurePatternRoutingConstant.getComposite.route
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
