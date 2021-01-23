import {IModelX} from "../../interfaces/cars-specifications-1/model-x.interface";
import {ETeslaModel} from "../../enums/tesla-model.enum";

export class ModelX implements IModelX {
  description: string = 'Tesla Model X is a full-size crossover with three rows of seats. Its overall dimensions are: length 5004 mm, width 2083 mm, height 1626 mm, and the wheelbase is 3061 mm. As for the ground clearance, it directly depends on the position of the air suspension.';
  model: ETeslaModel = ETeslaModel.MODEL_X;
  price: number = 81000;
  rating: number = 8.1;
  speed: number = 190;
  imgUrl: string = '../../../../../assets/img/tesla-model-x.jpg';

}
