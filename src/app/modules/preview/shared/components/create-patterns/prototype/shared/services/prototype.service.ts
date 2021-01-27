import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {PersonalDetails} from "../models/personal-details.prototype";
import {Programmer} from "../models/programmer";
import {map} from "rxjs/operators";

@Injectable()
export class PrototypeService {

  private _allMoney: Array<PersonalDetails> = [];
  private _allMoney$: BehaviorSubject<PersonalDetails[]> = new BehaviorSubject<PersonalDetails[]>([]);

  public selectedUser: PersonalDetails;

  public get getMoney$(): Observable<PersonalDetails[]> {
    return this._allMoney$.asObservable();
  }

  public update(data?: any): void {

    if (data) {
      this._createUser(data);
    } else {
      this._cloneUser(data);
    }

    this._allMoney$.next(this._allMoney);
  }

  private _createUser(data: any): void {
    const programmer = new PersonalDetails();
    programmer.name = data.name;
    programmer.surname = data.surname;
    programmer.age = data.age;
    programmer.salary = data.salary;
    programmer.term = data.term;
    programmer.position = new Programmer(programmer);
    this.selectedUser = programmer;
  }

  private _cloneUser(data: any): void {
    const programmer = this._allMoney.length > 0 ? this._allMoney[this._allMoney.length - 1].clone() : this.selectedUser.clone();
    this._allMoney.push(programmer);
  }

}
