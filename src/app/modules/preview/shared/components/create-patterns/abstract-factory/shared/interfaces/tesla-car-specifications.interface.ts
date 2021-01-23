import {ITeslaCar} from "./tesla-car.interface";
import {ETeslaModel} from "../enums/tesla-model.enum";
import {Observable} from "rxjs";
import {ITeslaCarList} from "./tesla-car-list.interface";
import {ITeslaStatistic} from "./tesla-statistic.interface";

export interface ITeslaCarSpecifications {
  specification: string;

  createCar(model: ETeslaModel): ITeslaCar;

  getCars$(): Observable<ITeslaCarList[]>;

  getStore(): Record<string, Array<ITeslaCar>>;

  factoryStatistic$(): Observable<ITeslaStatistic>;
}
