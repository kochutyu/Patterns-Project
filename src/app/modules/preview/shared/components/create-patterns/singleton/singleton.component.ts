import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {ServerServices} from "./services/server.services";
import {IServer} from "./interfaces/server.interface";
import {Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, takeUntil} from "rxjs/operators";


@Component({
  styleUrls: ['./singleton.component.scss', '../../../../preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card class="category">

      <mat-card-title>Severs</mat-card-title>

      <mat-card-content class="dns">


        <div class="dns__info">
          <img src="../../../../../../../assets/img/database.png" alt="database">
          <h2>{{serverState?.isConnected ? 'Connected to ' + serverState.dns.name : 'No Connected!'}}</h2>
        </div>

        <mat-form-field appearance="outline">
          <mat-label>Database domain</mat-label>
          <input matInput autocomplete="off" placeholder="Placeholder" [formControl]="pattern">
          <mat-icon matSuffix>dns</mat-icon>
        </mat-form-field>

        <mat-slide-toggle (toggleChange)="serverState?.isConnected ? disconnect() : connect()"
                          [checked]="serverState?.isConnected">
          {{(server.getServerState$ | async)?.isConnected ? 'Disconnect the server' : 'Connect to server' }}
        </mat-slide-toggle>

      </mat-card-content>

    </mat-card>
  `
})
export class SingletonComponent implements OnInit, OnDestroy {

  public serverState: IServer;

  private _destroySubject$: Subject<void> = new Subject<void>();

  public pattern: FormControl = new FormControl('');

  constructor(
    public server: ServerServices
  ) {
  }

  ngOnInit() {
    this.server.getServerState$
      .pipe(takeUntil(this._destroySubject$))
      .subscribe(state => {
        this.serverState = state;
      })

    this.pattern.valueChanges
      .pipe(takeUntil(this._destroySubject$), debounceTime(2000), distinctUntilChanged())
      .subscribe(name => {
        this.server.searchServer(name)
      })
  }

  ngOnDestroy() {
    this._destroySubject$.next();
  }

  public connect(): void {
    this.server.searchServer(this.pattern.value);
  }

  public disconnect(): void {
    this.server.disconnectServer();
  }
}
