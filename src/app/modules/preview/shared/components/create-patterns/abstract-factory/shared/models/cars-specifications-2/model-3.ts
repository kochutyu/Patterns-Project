import {IModel3} from "../../interfaces/cars-specifications-1/model-3.interface";
import {ETeslaModel} from "../../enums/tesla-model.enum";

export class Model3 implements IModel3 {
  description: string = 'Some description of Tesla Model 3 (v.2.0.0)';
  model: ETeslaModel = ETeslaModel.MODEL_3;
  price: number = 68000;
  rating: number = 9;
  speed: number = 265;
  imgUrl: string = '../../../../../assets/img/tesla-model-3.jpg';
}
