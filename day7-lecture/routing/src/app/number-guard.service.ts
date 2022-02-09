import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate, Router, RouterStateSnapshot, UrlTree
} from "@angular/router";
import {Deactivating} from "./model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class NumberGuardService implements CanActivate, CanDeactivate<Deactivating> {

  constructor() {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('>>> route num: ',route.params['num'])
    let checkNum = parseInt(route.params['num']);
    console.info('>>> canActivated checkNum: ', checkNum);

    return new Promise((resolve, reject) => {
      if (checkNum <= 10) {
        return resolve(true)
      } else {
        alert('number out of range')
        resolve(false)
      }
    })
  }

  canDeactivate(component: Deactivating, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return undefined;
  }
}
