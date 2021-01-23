import {ChangeDetectionStrategy, Component} from "@angular/core";
import {TeslaService} from "./shared/services/tesla.service";
import {ETeslaSpecification} from "./shared/enums/tesla-specification.enum";
import {ETeslaModel} from "./shared/enums/tesla-model.enum";
import {TeslaConstant} from "./shared/constant/tesla.constant";


@Component({
  styleUrls: ['./abstract-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './abstract-factory.component.html'
})
export class AbstractFactoryComponent {

  public models = TeslaConstant;

  constructor(
    public tesla: TeslaService
  ) {
    this.tesla.factory(ETeslaSpecification.SPECIFICATION_1);
    this.tesla.factory(ETeslaSpecification.SPECIFICATION_2);
  }

  public crateModel(factory: number, index: number): void {
    const currentFactory = this.tesla.getFactories[factory];
    switch (index) {
      case 0:
        currentFactory.createCar(ETeslaModel.MODEL_S)
        break;
      case 1:
        currentFactory.createCar(ETeslaModel.MODEL_X)
        break;
      case 2:
        currentFactory.createCar(ETeslaModel.MODEL_3)
        break;
    }
  }

  factoryBy(index, item) {
    return item.specification;
  }

}
