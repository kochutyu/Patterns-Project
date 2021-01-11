import {Injectable} from '@angular/core';
import {pipe} from "rxjs";
import {switchMap, tap} from "rxjs/operators";
import {Store} from "@ngrx/store";

import {DashboardPatternStateStorage} from "../storage/routs/dashboard-pattern-state.storage";

import {SDashboard} from "../store/selectors/dashboard/dashboard.selectors";

import {EDashboardPatternStorage} from "../enums/storage/dashboard/dashboard-pattern-storage.enum";


@Injectable({
  providedIn: "root"
})
export class SettingsService {

  constructor(
    private _store: Store
  ) {
  }

  public get saveDashboardCreatePatternToStoragePipe(): any {
    return pipe(
      switchMap(() => this._store.select(SDashboard.createPatterns.selectCategory)),
      tap(v => DashboardPatternStateStorage.setState(EDashboardPatternStorage.CREATE_PATTERNS, v))
    )
  }

  public get saveDashboardStructurePatternToStoragePipe(): any {
    return pipe(
      switchMap(() => this._store.select(SDashboard.structurePatterns.selectCategory)),
      tap(v => DashboardPatternStateStorage.setState(EDashboardPatternStorage.STRUCTURE_PATTERNS, v))
    )
  }

}
