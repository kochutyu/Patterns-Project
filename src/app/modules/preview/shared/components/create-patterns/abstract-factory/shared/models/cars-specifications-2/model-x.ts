import {IModelX} from "../../interfaces/cars-specifications-1/model-x.interface";
import {ETeslaModel} from "../../enums/tesla-model.enum";

export class ModelX implements IModelX {
  description: string = 'Some description of Tesla Model x (v.2.0.0)';
  model: ETeslaModel = ETeslaModel.MODEL_X;
  price: number = 162000;
  rating: number = 5.6;
  speed: number = 230;
  imgUrl: string = '../../../../../assets/img/tesla-model-x.jpg';

}
