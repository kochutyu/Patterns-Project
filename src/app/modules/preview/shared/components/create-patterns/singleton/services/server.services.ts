import {Injectable} from "@angular/core";
import {Dns} from "../model/dns";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {LoaderConstant} from "../../../../../../../core/constant/loader.constant";
import {LoaderService} from "../../../../../../../core/services/loader.service";
import {IServer} from "../interfaces/server.interface";

@Injectable()
export class ServerServices {

  private _servers: Array<Dns> = [];

  private _search$: Subject<string> = new Subject<string>();

  private _selectedServer$: BehaviorSubject<IServer> = new BehaviorSubject<IServer>(null);

  constructor(
    private _dialog: MatDialog,
    private _loader: LoaderService
  ) {
  }

  public get getServerState$(): Observable<IServer> {
    return this._selectedServer$.asObservable();
  }

  public searchServer(name: string): void {

    if (!!this._selectedServer$.getValue() && this._selectedServer$.getValue().isConnected) {
      this.disconnectServer();
      setTimeout(() => this._onSearch(name), 2000);
      return;
    }

    this._onSearch(name);
  }

  public disconnectServer(): void {
    if (this._selectedServer$.getValue().isConnected) {
      setTimeout(() => this._loader.load({
        img: LoaderConstant.getDefaultGIF,
        title: `Disconnecting from ${this._selectedServer$.getValue().dns.name}...`
      }), 100);
      setTimeout(() => {
        this._selectedServer$.next({dns: null, isConnected: false});
        this._loader.hide();
      }, 2000);
    }
  }

  private _createServer(server: Dns): void {
    this._servers.push(server);
    this._loader.load({img: LoaderConstant.getDefaultGIF, title: 'Server is creating...'});
    setTimeout(() => this._connectToServer(server), 2000);
  }

  private _connectToServer(server: Dns): void {
    this._loader.hide();
    setTimeout(() => this._loader.load({
      img: LoaderConstant.getDefaultGIF,
      title: `Connecting to ${server.name}...`
    }), 100);
    setTimeout(() => this._selectServer(server), 4000);
  }

  private _selectServer(server: Dns): void {
    this._loader.hide();
    this._selectedServer$.next({dns: server, isConnected: true});
  }

  private _onSearch(name: string): void {
    const server = Dns.getInstance(name);

    const isCreateServer = this._servers.find(s => s.name.toLowerCase() === server.name.toLowerCase());

    if (!isCreateServer) {
      this._createServer(server)
    } else {
      this._connectToServer(server);
    }
  }

}
