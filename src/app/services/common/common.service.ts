import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from '@angular/router';
import { STUDENTS_URL} from '../url-service-config';

@Injectable()
export class CommonService {

  constructor(public router: Router, public activatedRoute: ActivatedRoute, private http: HttpClient) { }

  login() {
    this.router.navigate(['layer']);
  }

  /**
   * 得到筛选列表
   */
  studentSelectList() {
    return this.http
      .get(STUDENTS_URL).pipe();
  }

}
