import {ITeslaCar} from "../interfaces/tesla-car.interface";
import {ETeslaModel} from "../enums/tesla-model.enum";
import {TeslaSpecification} from "./tesla.specification";
import {ModelS} from "./cars-specifications-2/model-s";
import {ModelX} from "./cars-specifications-2/model-x";
import {Model3} from "./cars-specifications-2/model-3";

export class TeslaSpecifications1Factory extends TeslaSpecification {
  public readonly specification: string = 'Specification 2';

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
