import {EStructurePattern} from "../../../../shared/enums/patterns/structure-pattern/structure-pattern.enum";
import {EStructurePatternImg} from "../../../../shared/enums/patterns/structure-pattern/structure-pattern-img.enum";

import {IDashboardCategoryList} from "../../../../shared/interfaces/category/dashboard-category-list.interface";
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
        },
        {
          id: EStructurePattern.DECORATOR,
          title: EStructurePattern.DECORATOR,
          imgSrc: EStructurePatternImg.DECORATOR,
          route: StructurePatternRoutingConstant.getDecorator.route
        },
        {
          id: EStructurePattern.FACADE,
          title: EStructurePattern.FACADE,
          imgSrc: EStructurePatternImg.FACADE,
          route: StructurePatternRoutingConstant.getFacade.route
        }, {
          id: EStructurePattern.FLYWEIGHT,
          title: EStructurePattern.FLYWEIGHT,
          imgSrc: EStructurePatternImg.FLYWEIGHT,
          route: StructurePatternRoutingConstant.getFlyweight.route
        }
        , {
          id: EStructurePattern.PROXY,
          title: EStructurePattern.PROXY,
          imgSrc: EStructurePatternImg.PROXY,
          route: StructurePatternRoutingConstant.getProxy.route
        }
      ]
    }
  }

  static get initialState(): IDashboardCategoryList {
    return {
      categoryName: 'Structure Design Patterns',
      content: this.getPatternsList.content
    }
  }

}
