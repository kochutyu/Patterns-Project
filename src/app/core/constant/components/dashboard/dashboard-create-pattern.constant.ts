import {ECreatePattern} from "../../../enums/patterns/create-pattern/create-pattern.enum";
import {ECreatePatternImg} from "../../../enums/patterns/create-pattern/create-pattern-img.enum";

import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {CreatePatternRoutingConstant} from "../../routing/preview/create-pattern-routing.constant";


export class DashboardCreatePatternConstant {

  static get getPatternsList(): IDashboardCategoryList {
    return {
      categoryName: 'Creation Design Patterns',
      content: [
        {
          id: ECreatePattern.ABSTRACT_FACTORY,
          title: ECreatePattern.ABSTRACT_FACTORY,
          imgSrc: ECreatePatternImg.FACTORY,
          route: CreatePatternRoutingConstant.getAbstractFactory.route
        },
        {
          id: ECreatePattern.FACTORY_METHOD,
          title: ECreatePattern.FACTORY_METHOD,
          imgSrc: ECreatePatternImg.FACTORY,
          route: CreatePatternRoutingConstant.getFactoryMethod.route
        },
        {
          id: ECreatePattern.BUILDER,
          title: ECreatePattern.BUILDER,
          imgSrc: ECreatePatternImg.BUILDER,
          route: CreatePatternRoutingConstant.getBuilder.route
        },
        {
          id: ECreatePattern.PROTOTYPE,
          title: ECreatePattern.PROTOTYPE,
          imgSrc: ECreatePatternImg.PROTOTYPE,
          route: CreatePatternRoutingConstant.getPrototype.route
        },
        {
          id: ECreatePattern.SINGLETON,
          title: ECreatePattern.SINGLETON,
          imgSrc: ECreatePatternImg.SINGLETON,
          route: CreatePatternRoutingConstant.getSingleton.route
        }
      ]
    }
  }

  static get initialState(): IDashboardCategoryList {
    return {
      categoryName: 'Creation Design Patterns',
      content: this.getPatternsList.content
    }
  }

}
