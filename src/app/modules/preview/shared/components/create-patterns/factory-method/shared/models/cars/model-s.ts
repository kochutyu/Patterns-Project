import {IModelS} from "../../interfaces/model-s.interface";
import {ETeslaModel} from "../../enums/tesla-model.enum";

export class ModelS implements IModelS {

  description: string = 'Model S sets an industry standard for performance and safety. Tesla\'s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration. Model S sets an industry standard for performance and safety.';
  model: ETeslaModel = ETeslaModel.MODEL_S;
  price: number = 139000;
  rating: number = 8.1;
  speed: number = 249;
  imgUrl: string = '../../../../../assets/img/tesla-model-s.jpg';

}
