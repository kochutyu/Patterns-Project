import {ITeslaCar} from "./tesla-car.interface";
import {IDashboardCategoryList} from "../../../../../../../../core/interfaces/category/dashboard-category-list.interface";

export type title = Pick<IDashboardCategoryList, 'categoryName'>;

export interface ITeslaCards {
  preview: IDashboardCategoryList;
  cards: Array<ITeslaCar>
}
