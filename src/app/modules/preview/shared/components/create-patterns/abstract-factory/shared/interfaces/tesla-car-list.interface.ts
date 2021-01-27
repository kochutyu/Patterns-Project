import {ITeslaCar} from "./tesla-car.interface";
import {IDashboardCard} from "../../../../../../../../shared/interfaces/components/card/dashboard-card.interface";

export interface ITeslaCarList {
  cars: Array<ITeslaCar>;
  total: number;
  model: string;
  card?: IDashboardCard;
}
