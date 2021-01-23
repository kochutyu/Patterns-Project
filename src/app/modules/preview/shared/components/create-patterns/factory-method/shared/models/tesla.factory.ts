import {ITeslaCar} from "../interfaces/tesla-car.interface";
import {ETeslaModel} from "../enums/tesla-model.enum";

export abstract class TeslaFactory {
  private _store: Record<string, Array<ITeslaCar>> = {};

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
}
