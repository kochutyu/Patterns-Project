import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {SAppRouting} from "../store/selectors/routing/app-routing.selectors";
import {map} from "rxjs/operators";
import {TogglePreviewRouting} from "../store/actions/routing/routing.actions";
import {AppRoutingConstant} from "../constant/routing/app-routing.constant";

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private _store: Store,
    private _router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const urls: Array<string> = state.url.split('/').filter(url => !!url);
    return this._store.select(SAppRouting.preview.selectActiveStatus).pipe(
      map(status => {

        const isLoadRoute: boolean = urls.length > 1 && status;

        if (isLoadRoute) {
          return true;
        }

        this._store.dispatch(TogglePreviewRouting({status: false}));
        this._router.navigate(AppRoutingConstant.getHomeRoute.route);
        return false;
      })
    )
  }

}
