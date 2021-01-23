import {Injectable} from '@angular/core';
import {TeslaFactory} from "../models/tesla.factory";
import {ETeslaSpecification} from "../enums/tesla-specification.enum";
import {ITeslaCarSpecifications} from "../interfaces/tesla-car-specifications.interface";
import {TeslaSpecifications2Factory} from "../models/tesla-specifications-1.factory";
import {TeslaSpecifications1Factory} from "../models/tesla-specifications-2.factory";
import {combineLatest, interval, Observable} from "rxjs";
import {ITeslaCarList} from "../interfaces/tesla-car-list.interface";
import {map} from "rxjs/operators";
import {ITeslaStatistic} from "../interfaces/tesla-statistic.interface";
import {IAllTeslaStatistic} from "../interfaces/all-tesla-statistic.interface";

@Injectable()
export class TeslaService extends TeslaFactory {

  public factory(specification: ETeslaSpecification): ITeslaCarSpecifications {
    switch (specification) {
      case ETeslaSpecification.SPECIFICATION_1:
        return this.setFactory(new TeslaSpecifications1Factory());
      case ETeslaSpecification.SPECIFICATION_2:
        return this.setFactory(new TeslaSpecifications2Factory());
    }
  }

  public getTotalCars$(): Observable<IAllTeslaStatistic> {
    const statistic = this.getFactories.map(s => s.factoryStatistic$());
    return combineLatest(statistic).pipe(
      map(factories => ({
        factories,
        total: factories.map(v => v.total).reduce((store, value) => store + value)
      }))
    )
  }


}
