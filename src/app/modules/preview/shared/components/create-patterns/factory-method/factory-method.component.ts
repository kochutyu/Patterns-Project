import {ChangeDetectionStrategy, Component, DoCheck} from "@angular/core";
import {IModelS} from "./shared/interfaces/model-s.interface";
import {ETeslaModel} from "./shared/enums/tesla-model.enum";
import {TeslaService} from "./shared/services/tesla.service";
import {TeslaConstant} from "./shared/constant/tesla.constant";
import {ITeslaCards} from "./shared/interfaces/tesla-cards.interface";


@Component({
  styleUrls: ['factory-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let category of categories; let i = index">

      <mat-card class="category">
        <mat-card-header>
          <mat-card-title>{{category.preview.categoryName}}</mat-card-title>
          <mat-card-subtitle *ngIf="i > 0">Total cars: <strong>{{tesla.getTotalCars$ | async}}</strong>
          </mat-card-subtitle>
        </mat-card-header>
        <div class="patterns center">

          <ng-container *ngIf="i === 0; else store">
            <app-card class="card" (click)="createCar(j)" [isClick]="true" [classList]="['tesla-card']"
                      [data]="card" *ngFor="let card of category.preview.content; let j = index"></app-card>
          </ng-container>

          <ng-template #store>
            <div *ngFor="let model of tesla.getCars$ | async; let row = index" class="store-col">
              <div class="store-col__img">
                <app-card class="tesla-card" [classList]="['card']" [data]="model.card"></app-card>
                <div class="store-col__img-footer">
                  TOTAL: {{model.total}}
                </div>
              </div>
              <ul *ngFor="let car of model.cars; trackBy: trackBy" class="store-col__car">
                <li>
                  <strong>Model</strong>: {{car?.model | splitStr: '_' | joinStr: ' '}}
                </li>
                <li>
                  <strong>Price</strong>: {{car?.price}}
                </li>
                <li>
                  <strong>Speed</strong>: {{car?.speed}}
                </li>
                <li>
                  <strong>Rating</strong>: {{car?.rating}}
                </li>
                <li>
                  <strong>Description</strong>: {{car?.description}}
                </li>
              </ul>
            </div>
          </ng-template>


        </div>
      </mat-card>

    </ng-container>
  `
})
export class FactoryMethodComponent{

  public categories: Array<ITeslaCards> = TeslaConstant.getModelsCard;

  constructor(
    public tesla: TeslaService
  ) {
    this.tesla.getCars$
      .subscribe(res => {
        console.log(res, 'CARS')
      })
  }

  public create(): void {
    this.tesla.createCar(ETeslaModel.MODEL_S);
  }

  public createCar(index: number): void {
    switch (index) {
      case 0:
        this.tesla.createCar(ETeslaModel.MODEL_S);
        break;
      case 1:
        this.tesla.createCar(ETeslaModel.MODEL_X);
        break;
      case 2:
        this.tesla.createCar(ETeslaModel.MODEL_3);
        break;
    }
  }

  public trackBy(index, item){
    return item;
  }
}
