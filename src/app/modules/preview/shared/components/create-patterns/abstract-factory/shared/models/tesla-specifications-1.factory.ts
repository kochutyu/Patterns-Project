import {ITeslaCar} from "../interfaces/tesla-car.interface";
import {ETeslaModel} from "../enums/tesla-model.enum";
import {ITeslaCarSpecifications} from "../interfaces/tesla-car-specifications.interface";
import {ModelS} from "./cars-specifications-1/model-s";
import {ModelX} from "./cars-specifications-1/model-x";
import {Model3} from "./cars-specifications-1/model-3";
import {TeslaSpecification} from "./tesla.specification";

export class TeslaSpecifications2Factory extends TeslaSpecification{
  public readonly specification: string = 'Specification 1';

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
    this.initCar(model, car);
    return car;
  };

}
