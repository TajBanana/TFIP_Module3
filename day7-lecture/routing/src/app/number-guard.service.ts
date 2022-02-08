import {CanActivate, CanDeactivate} from "@angular/router";

export class NumberGuardService implements CanActivate, CanDeactivate<Deactivating> {}
