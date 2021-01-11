import {IDashboardCard} from "../components/card/dashboard-card.interface";


export interface IDashboardCategoryList {
  categoryName: string;
  content: Array<IDashboardCard>;
}
