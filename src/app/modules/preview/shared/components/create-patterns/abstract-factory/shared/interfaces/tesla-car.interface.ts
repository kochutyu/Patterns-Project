import {ETeslaModel} from "../enums/tesla-model.enum";

export interface ITeslaCar {
  model: ETeslaModel;
  price: number;
  description: string;
  rating: number;
  speed: number;
  imgUrl: string;
}
