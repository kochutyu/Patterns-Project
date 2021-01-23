import {IDashboardCategoryList} from "../../../../../../../../core/interfaces/category/dashboard-category-list.interface";

export type title = Pick<IDashboardCategoryList, 'categoryName'>;

export interface ITeslaCards {
  preview: IDashboardCategoryList;
}
