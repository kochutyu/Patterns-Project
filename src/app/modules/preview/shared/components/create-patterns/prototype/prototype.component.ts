import {Component, OnDestroy, OnInit} from "@angular/core";
import {PersonalDetails} from "./shared/models/personal-details.prototype";
import {LoaderService} from "./shared/services/loader.service";
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "./shared/components/form/form.component";
import {PrototypeConstant} from "./shared/constants/prototype.constant";
import {Subject} from "rxjs";
import {PrototypeService} from "./shared/services/prototype.service";


@Component({
  styleUrls: ['./prototype.component.scss', '../../../../preview.component.scss'],
  template: `
    <mat-card class="category">
      <mat-card-header>
        <mat-icon mat-card-avatar>
          {{prototype.selectedUser ? 'sentiment_satisfied_alt' : 'sentiment_very_dissatisfied'}}
        </mat-icon>
        <mat-card-title>Get a job</mat-card-title>

      </mat-card-header>

      <ng-container *ngIf="!prototype.selectedUser; else workTime">
        <button mat-raised-button color="primary" (click)="startGame()">Start Game</button>
      </ng-container>

      <ng-template #workTime>
        <ul class="light-card">
          <li>
            <strong>Name</strong>: {{prototype.selectedUser.name}}
          </li>
          <li>
            <strong>Surname</strong>: {{prototype.selectedUser.surname}}
          </li>
          <li>
            <strong>Age</strong>: {{prototype.selectedUser.age}}
          </li>
          <li>
            <strong>Salary</strong>: {{prototype.selectedUser.salary}}
          </li>
          <li>
            <strong>Max work days</strong>: {{prototype.selectedUser.term}}
          </li>
          <li>
            <strong>Position</strong>: Programmer
          </li>
        </ul>
        <button mat-raised-button color="primary" (click)="work()">Work</button>
      </ng-template>

      <div class="patterns center">
        <div *ngFor="let cash of prototype.getMoney$ | async">
          <img [src]="images.getMoneyImg" alt="img">
        </div>
      </div>

    </mat-card>
  `
})
export class PrototypeComponent implements OnInit, OnDestroy {

  public images = PrototypeConstant;

  public money: Array<PersonalDetails> = [];

  private _destroySubject$: Subject<void> = new Subject<void>();

  constructor(
    private _loader: LoaderService,
    private _dialog: MatDialog,
    public prototype: PrototypeService
  ) {
    this.prototype.getMoney$.subscribe(res => {
      this.money = res;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._destroySubject$.next();
  }

  public startGame(): void {
    this._dialog.open(FormComponent, {disableClose: true});
  }

  public work(): void {
    if (this.money.length % 3 === 0 && this.money.length > 0) {
      this._loader.load({img: this.images.getGoodJobGIF});
    } else if (this.money.length > 0) {
      this._loader.load({img: this.images.getPrintMoneyGIF});
    } else {
      this._loader.load({img: this.images.getWorkGIF});
    }
  }
}
