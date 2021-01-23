import {Injectable} from '@angular/core';
import {ETeslaModel} from "../enums/tesla-model.enum";
import {ITeslaCar} from "../interfaces/tesla-car.interface";
import {TeslaFactory} from "../models/tesla.factory";

import {ModelS} from "../models/cars/model-s";
import {Model3} from "../models/cars/model-3";
import {ModelX} from "../models/cars/model-x";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {ITeslaCarList} from "../interfaces/tesla-car-list.interface";

@Injectable()
export class TeslaService extends TeslaFactory {

  private _total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _cars$: BehaviorSubject<Array<[string, ITeslaCar[]]>> = new BehaviorSubject<Array<[string, ITeslaCar[]]>>([]);

  public get getTotalCars$(): Observable<number> {
    return this._total$.asObservable();
  }

  public get getCars$(): Observable<ITeslaCarList[]> {
    return this._cars$.asObservable()
      .pipe(
        map(v => this._getCarsArr),
        map(models => models.map(model => this._parseModel(model))),
        map(models => this._parseCardForModel(models))
      )
  }

  private get _getCarsArr(): Array<[string, Array<ITeslaCar>]> {
    return Object.entries(this.getStore());
  }

  public createCar(model: ETeslaModel): ITeslaCar {
    let car: ITeslaCar;
    switch (model) {
      case ETeslaModel.MODEL_S:
        car = new ModelS();
        break;
      case ETeslaModel.MODEL_X:
        car = new ModelX();
        break;
      case ETeslaModel.MODEL_3:
        car = new Model3();
        break;
    }
    this.putUpForSale(model, car);
    this._updateData();
    return car;
  }

  public getCarsByModel$(model: ETeslaModel): Observable<ITeslaCarList | null> {
    return this._cars$.asObservable()
      .pipe(
        map(v => this._getCarsArr),
        map((models: any) => models.find(modelItem => modelItem[0] === model)),
        map(selectedModel => this._parseModel(selectedModel))
      )
  }

  private _parseModel(model: [string, Array<ITeslaCar>]): ITeslaCarList {
    if (!model) {
      return null;
    }

    return {
      model: model[0].split('_').join(' '),
      cars: model[1],
      total: model[1].length
    }
  }

  private _parseCardForModel(models: Array<ITeslaCarList>): Array<ITeslaCarList> {
    return models.map(modal => {
      return {
        ...modal,
        card: {
          title: modal.cars[0].model,
          imgSrc: modal.cars[0].imgUrl
        }
      }
    });
  }

  private _updateTotalCars(): void {
    const total: number = [...this._getCarsArr]
      .map(v => v[1].length)
      .reduce((storage: any, value: any) => {
        return storage + value
      })

    this._total$.next(total);
  }

  private _updateData(): void {
    this._cars$.next(this._getCarsArr);
    this._updateTotalCars();
  }
}
