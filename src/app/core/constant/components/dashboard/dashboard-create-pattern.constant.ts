import {ECreatePattern} from "../../../enums/patterns/create-pattern/create-pattern.enum";
import {ECreatePatternImg} from "../../../enums/patterns/create-pattern/create-pattern-img.enum";

import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {CreatePatternRoutingConstant} from "../../routing/create-pattern-routing.constant";


export class DashboardCreatePatternConstant {

  static get getPatternsList(): IDashboardCategoryList {
    return {
      categoryName: 'Creation Design Patterns',
      content: [
        {
          id: ECreatePattern.FACTORY,
          title: ECreatePattern.FACTORY,
          imgSrc: ECreatePatternImg.FACTORY,
          route: CreatePatternRoutingConstant.getFactory.route
        },
        {
          id: ECreatePattern.BUILDER,
          title: ECreatePattern.BUILDER,
          imgSrc: ECreatePatternImg.BUILDER,
          route: CreatePatternRoutingConstant.getBuilder.route
        }
      ]
    }
  }

  static get initialState(): IDashboardCategoryList {
    return {
      categoryName: 'Creation Design Patterns',
      content: [
        {
          id: ECreatePattern.FACTORY,
          title: ECreatePattern.FACTORY,
          imgSrc: ECreatePatternImg.FACTORY,
          route: CreatePatternRoutingConstant.getFactory.route
        }
      ]
    }
  }

}
