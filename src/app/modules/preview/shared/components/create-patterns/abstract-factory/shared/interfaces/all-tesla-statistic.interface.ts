import {ITeslaStatistic} from "./tesla-statistic.interface";

export interface IAllTeslaStatistic {
  factories: Array<ITeslaStatistic>;
  total: number
}
