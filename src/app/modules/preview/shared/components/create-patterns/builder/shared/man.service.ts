import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {IMan} from "./interfaces/man.interface";
import {ManBuilder} from "./models/man.builder";

@Injectable()
export class ManService {
  public builder: ManBuilder = new ManBuilder();

  private _man: BehaviorSubject<IMan> = new BehaviorSubject<IMan>({});

  public getMan$(): Observable<IMan> {
    return this._man.asObservable();
  }

  public updateMan(): void {
    this._man.next(this.builder.getResult());
  }
}
