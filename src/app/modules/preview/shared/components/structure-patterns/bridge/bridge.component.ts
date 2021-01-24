import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Tv} from "./shared/models/devices/tv";
import {Radio} from "./shared/models/devices/radio";
import {AdvancedRemote} from "./shared/models/controls/advanced-remote";
import {Remote} from "./shared/models/controls/remote";


@Component({
  styleUrls: ['./bridge.component.scss', '../../../../preview.component.scss'],
  template: `
    <mat-card class="category">
      <mat-card-title>Remote controls</mat-card-title>

      <mat-card-content>

        <div class="device">
          <h2>TV</h2>
          <div class="device__controls">
            <button mat-raised-button color="primary" (click)="volumeUp(0)">Volume Up</button>
            <button mat-raised-button color="primary" (click)="volumeDown(0)">Volume Down</button>
            <button mat-raised-button color="primary" (click)="channelUp(0)">Chanel Up</button>
            <button mat-raised-button color="primary" (click)="channelDown(0)">Chanel Down</button>
            <button mat-raised-button color="primary" (click)="mute(0)">Mute</button>
            <button mat-raised-button color="primary" (click)="togglePower(0)">Toggle Power</button>
          </div>
          <pre *ngIf="tv">
            {{tv | json}}
          </pre>
        </div>

        <div class="device">

          <h2>Radio</h2>
          <div class="device__controls">
            <button mat-raised-button color="primary" (click)="volumeUp(1)">Volume Up</button>
            <button mat-raised-button color="primary" (click)="volumeDown(1)">Volume Down</button>
            <button mat-raised-button color="primary" (click)="channelUp(1)">Chanel Up</button>
            <button mat-raised-button color="primary" (click)="channelDown(1)">Chanel Down</button>
            <button mat-raised-button color="primary" (click)="togglePower(1)">Toggle Power</button>
          </div>
          <pre *ngIf="radio">
            {{radio | json}}
          </pre>
        </div>


      </mat-card-content>

    </mat-card>
  `
})
export class BridgeComponent implements AfterViewInit{

  tv = new Tv();
  tvControl = new AdvancedRemote(this.tv);

  radio = new Radio();
  radioControl = new Remote(this.radio);

  constructor(
    private _cd: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this._cd.detach();
  }

  public volumeUp(device: number): void {
    console.log(device)
    switch (device) {
      case 0:
        this.tvControl.volumeUp();
        break;
      case 1:
        this.radioControl.volumeUp();
        break;
    }
    this._cd.detectChanges();
  }

  public volumeDown(device: number): void {
    switch (device) {
      case 0:
        this.tvControl.volumeDown();
        break;
      case 1:
        this.radioControl.volumeDown();
        break;
    }
    this._cd.detectChanges();
  }

  public channelUp(device: number): void {
    switch (device) {
      case 0:
        this.tvControl.channelUp();
        break;
      case 1:
        this.radioControl.channelUp();
        break;
    }
    this._cd.detectChanges();
  }

  public channelDown(device: number): void {
    switch (device) {
      case 0:
        this.tvControl.channelDown();
        break;
      case 1:
        this.radioControl.channelDown();
        break;
    }
    this._cd.detectChanges();
  }

  public togglePower(device: number): void {
    switch (device) {
      case 0:
        this.tvControl.togglePower();
        break;
      case 1:
        this.radioControl.togglePower();
        break;
    }
    this._cd.detectChanges();
  }

  public mute(device: number): void {
    switch (device) {
      case 0:
        this.tvControl.mute();
        break;
    }
    this._cd.detectChanges();
  }

}
