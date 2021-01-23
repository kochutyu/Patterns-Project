import {ITeslaCar} from "./tesla-car.interface";
import {IDashboardCard} from "../../../../../../../../core/interfaces/components/card/dashboard-card.interface";

export interface ITeslaCarList {
  model: string;
  cars: Array<ITeslaCar>;
  total: number;
  card?: IDashboardCard;
}
