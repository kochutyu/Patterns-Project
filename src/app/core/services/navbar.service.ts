import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public routerStatus$: Subject<void> = new Subject<void>();

  public get observeForTabLinkChange$(): Observable<void> {
    return this.routerStatus$.asObservable();
  }

  public updateTabLink(): void {
    this.routerStatus$.next();
  }

}
