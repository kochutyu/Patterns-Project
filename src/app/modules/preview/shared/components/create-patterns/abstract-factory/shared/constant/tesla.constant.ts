import {ITeslaCards} from "../interfaces/tesla-cards.interface";
import {IDashboardCard} from "../../../../../../../../shared/interfaces/components/card/dashboard-card.interface";

export class TeslaConstant {

  public static get getModelsCardPreview(): Array<IDashboardCard> {
    return [
      {
        imgSrc: '../../../../assets/img/tesla-model-s.jpg',
        title: 'Model S'
      },
      {
        imgSrc: '../../../../assets/img/tesla-model-x.jpg',
        title: 'Model X'
      },
      {
        imgSrc: '../../../../assets/img/tesla-model-3.jpg',
        title: 'Model 3'
      }
    ]
  }

  public static get getModelsCard(): Array<ITeslaCards> {
    return [
      {
        preview: {
          categoryName: 'Factory',
          content: this.getModelsCardPreview,
        }
      },
      {
        preview: {
          categoryName: 'Store',
          content: this.getModelsCardPreview,
        }
      }
    ]
  }

}
