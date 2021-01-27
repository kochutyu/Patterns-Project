import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import {SAppRouting} from "../store/selectors/routing/app-routing.selectors";
import {RouteStorage} from "../storage/routs/route.storage";
import {TogglePreviewRouting} from "../store/actions/routing/routing.actions";

import {AppRoutingConstant} from "../constant/routing/app-routing.constant";

@Injectable()
export class AppPreviewGuard implements CanActivate {

  constructor(
    private _store: Store,
    private _router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const urls: Array<string> = state.url.split('/').filter(url => !!url);

    return this._store.select(SAppRouting.preview.selectActiveStatus).pipe(
      map(status => {

        const blockPreview: boolean = this.isBlockPreview(urls, status) || this.isBlockPreviewPattern(urls);
        RouteStorage.set(urls);

        if (blockPreview) {
          this.blockPreview();
          return false;
        }

        return true;
      })
    )
  }

  private isBlockPreview(urls: Array<string>, status: boolean): boolean {
    const notFullPreviewRoute: boolean = (urls.length < 2) && urls[0] === AppRoutingConstant.getPreviewRoute.path;
    const notPreviewRoute: boolean = urls[0] !== AppRoutingConstant.getPreviewRoute.path;

    return (notPreviewRoute && status) || notFullPreviewRoute;
  }

  private isBlockPreviewPattern(urls: Array<string>): boolean {
    const previousRoute = RouteStorage.get();
    const newPatternOnRoute: boolean = previousRoute[1] !== urls[1] && !!previousRoute[1];
    const isPreviewRoute: boolean = urls[0] === AppRoutingConstant.getPreviewRoute.path && !!urls[0];

    return newPatternOnRoute && isPreviewRoute;
  }

  private blockPreview(): void {
    this._store.dispatch(TogglePreviewRouting({status: false}));
    this._router.navigate(AppRoutingConstant.getHomeRoute.route);
  }

}
