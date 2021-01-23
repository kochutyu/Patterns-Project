import {ITeslaCarSpecifications} from "../interfaces/tesla-car-specifications.interface";
import {ETeslaSpecification} from "../enums/tesla-specification.enum";

export abstract class TeslaFactory {

  private _factories: Array<ITeslaCarSpecifications> = [];

  public get getFactories(): Array<ITeslaCarSpecifications> {
    return this._factories;
  }

  abstract factory(specification: ETeslaSpecification): ITeslaCarSpecifications;

  public setFactory(factory: ITeslaCarSpecifications): ITeslaCarSpecifications {
    const index = this.getFactories.findIndex(f => f.specification === factory.specification);
    if (index > -1) {
      return this._factories[index];
    }
    this._factories.push(factory);
    return this._factories[this._factories.length - 1];
  }

}
