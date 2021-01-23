import {IModelS} from "../../interfaces/cars-specifications-1/model-s.interface";
import {ETeslaModel} from "../../enums/tesla-model.enum";

export class ModelS implements IModelS {

  description: string = 'Some description of Tesla Model S (v.2.0.0)';
  model: ETeslaModel = ETeslaModel.MODEL_S;
  price: number = 278000;
  rating: number = 9.9;
  speed: number = 340;
  imgUrl: string = '../../../../../assets/img/tesla-model-s.jpg';

}
