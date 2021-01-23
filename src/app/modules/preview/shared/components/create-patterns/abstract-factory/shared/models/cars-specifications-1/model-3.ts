import {IModel3} from "../../interfaces/cars-specifications-1/model-3.interface";
import {ETeslaModel} from "../../enums/tesla-model.enum";

export class Model3 implements IModel3 {
  description: string = 'Tesla, Inc. The Tesla Model 3 is an electric four-door fastback sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km).';
  model: ETeslaModel = ETeslaModel.MODEL_3;
  price: number = 39000;
  rating: number = 8.4;
  speed: number = 225;
  imgUrl: string = '../../../../../assets/img/tesla-model-3.jpg';
}
