import {ITeslaCarList} from "./tesla-car-list.interface";

export interface ITeslaStatistic {
  cars: Array<ITeslaCarList>;
  total: number;
}
