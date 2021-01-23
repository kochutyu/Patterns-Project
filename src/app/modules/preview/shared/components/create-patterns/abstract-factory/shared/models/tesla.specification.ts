import {ITeslaCar} from "../interfaces/tesla-car.interface";
import {ETeslaModel} from "../enums/tesla-model.enum";
import {ITeslaCarSpecifications} from "../interfaces/tesla-car-specifications.interface";
import {ITeslaCarList} from "../interfaces/tesla-car-list.interface";
import {map} from "rxjs/operators";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {ITeslaStatistic} from "../interfaces/tesla-statistic.interface";

export abstract class TeslaSpecification implements ITeslaCarSpecifications {
  public abstract specification: string;
  private _store: Record<string, Array<ITeslaCar>> = {};
  private _total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _cars$: BehaviorSubject<Array<[string, ITeslaCar[]]>> = new BehaviorSubject<Array<[string, ITeslaCar[]]>>([]);

  public get getTotalCars$(): Observable<number> {
    return this._total$.asObservable();
  }

  private get _getCarsArr(): Array<[string, Array<ITeslaCar>]> {
    return Object.entries(this.getStore());
  }

  public getCars$(): Observable<ITeslaCarList[]> {
    return this._cars$.asObservable()
      .pipe(
        map(v => this._getCarsArr),
        map(models => models.map(model => this._parseModel(model))),
        map(models => this._parseCardForModel(models))
      )
  }

  public putUpForSale(model: ETeslaModel, car: ITeslaCar): void {

    if (this._store[model]) {
      this._store[model] = [...this._store[model], car];
      return;
    }

    this._store[model] = [car];
  }

  public getStore(): Record<string, Array<ITeslaCar>> {
    return this._store;
  }

  abstract createCar(model: ETeslaModel): ITeslaCar;

  public initCar(model: ETeslaModel, car: ITeslaCar): void {
    this.putUpForSale(model, car);
    this._updateData();
  }

  public getCarsByModel$(model: ETeslaModel): Observable<ITeslaCarList | null> {
    return this._cars$.asObservable()
      .pipe(
        map(v => this._getCarsArr),
        map((models: any) => models.find(modelItem => modelItem[0] === model)),
        map(selectedModel => this._parseModel(selectedModel))
      )
  }

  public factoryStatistic$(): Observable<ITeslaStatistic> {
    const streams: Array<Observable<any>> = [this.getCars$(), this.getTotalCars$];
    return combineLatest(streams)
      .pipe(
        map(res => ({cars: res[0], total: res[1]})),
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
