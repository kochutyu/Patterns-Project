import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {SAppRouting} from "../store/selectors/routing/app-routing.selectors";
import {map} from "rxjs/operators";
import {AppRoutingConstant} from "../constant/routing/app-routing.constant";
import {TogglePreviewRouting} from "../store/actions/routing/routing.actions";

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private _store: Store
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._store.select(SAppRouting.preview.selectActiveStatus).pipe(
      map(status => {

        /**
         * If route not '/preview/...'
         */
        if (status && route.url[0].path !== AppRoutingConstant.getPreviewRoute.path) {
          this._store.dispatch(TogglePreviewRouting({status: false}));
          return false;
        }

        return true;
      })
    )
  }

}
