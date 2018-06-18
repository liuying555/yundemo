import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class CommonService {

  constructor(public router: Router) { }

  login() {
    this.router.navigate(['layer']);
  }

}
