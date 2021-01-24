import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ExchangerService} from "./shared/services/exchanger.service";


@Component({
  styleUrls: ['./adapter.component.scss', '../../../../preview.component.scss'],
  template: `
    <mat-card class="category">
      <mat-card-title>Exchanger</mat-card-title>

      <mat-card-content class="center">
        <form [formGroup]="form" autocomplete="off" class="patterns">
          <mat-form-field appearance="fill">
            <mat-label>Sell currency</mat-label>
            <mat-select [formControl]="form.controls.sellOption" (valueChange)="resetValues()">
              <mat-option *ngFor="let pair of exchanger.pairs" [value]="pair">{{pair.name}}</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field appearance="fill">
            <mat-label>Buy currency</mat-label>
            <mat-select [formControl]="form.controls.buyOption" (valueChange)="resetValues()">
              <mat-option *ngFor="let pair of exchanger.pairs" [value]="pair">{{pair.name}}</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field class="example-form-field">
            <mat-label>Sell amount</mat-label>
            <input matInput type="text" [formControl]="form.controls.sellInput" (input)="updateSellToBuy()" #sellInput>
            <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="sellInput.value=''">
              <mat-icon>close</mat-icon>
            </button>
          </mat-form-field>

          <mat-form-field class="example-form-field">
            <mat-label>Buy amount</mat-label>
            <input matInput type="text" [formControl]="form.controls.buyInput" (input)="updateBuyToSell()" #buyInput>
            <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="buyInput.value=''">
              <mat-icon>close</mat-icon>
            </button>
          </mat-form-field>
        </form>
      </mat-card-content>
    </mat-card>
  `
})
export class AdapterComponent implements OnInit {

  form: FormGroup;

  value: number;
  buy: any;

  constructor(
    public exchanger: ExchangerService
  ) {
  }

  ngOnInit() {
    this._initForm();
  }

  public updateSellToBuy(): void {
    const value = this.exchanger.sellToBuy(
      this.form.get('sellOption').value,
      this.form.get('buyOption').value,
      this.form.get('sellInput').value,
    )

    this.form.get('buyInput').patchValue(value);
  }

  public updateBuyToSell(): void {
    const value = this.exchanger.buyToSell(
      this.form.get('sellOption').value,
      this.form.get('buyOption').value,
      this.form.get('buyInput').value,
    )
    this.form.get('sellInput').patchValue(value);
  }

  public resetValues(): void {
    this.form.get('sellInput').patchValue(null);
    this.form.get('buyInput').patchValue(null);
  }

  private _initForm(): void {
    this.form = new FormGroup({
      sellOption: new FormControl(this.exchanger.pairs[0]), // UAH
      buyOption: new FormControl(this.exchanger.pairs[1]), // USD
      sellInput: new FormControl(1),
      buyInput: new FormControl(1)
    })
  }


}
