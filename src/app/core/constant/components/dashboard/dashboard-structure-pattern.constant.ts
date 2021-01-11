import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {ECreatePattern} from "../../../enums/patterns/create-pattern.enum";
import {ECreatePatternImg} from "../../../enums/patterns-img/create-pattern-img.enum";

export class DashboardCreatePatternConstant {
  static get getPatternsList(): IDashboardCategoryList {
    return {
      categoryName: 'Creation Design Patterns',
      content: [
        {
          id: ECreatePattern.FACTORY,
          title: ECreatePattern.FACTORY,
          imgSrc: ECreatePatternImg.FACTORY
        },
        {
          id: ECreatePattern.BUILDER,
          title: ECreatePattern.BUILDER,
          imgSrc: ECreatePatternImg.BUILDER
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
          imgSrc: ECreatePatternImg.FACTORY
        }
      ]
    }
  }
}
