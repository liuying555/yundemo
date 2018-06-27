import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentServiceService {
  public userListURL:string = 'mock-data/userlist-mock.json';

  constructor( public http: HttpClient) {
   }

  tableShow() {
  }

  getBillTypes() {
    console.log('这是service里的方法');
  }

  public getUserList():Observable<any> {
    return this.http
      .get(this.userListURL)
      .map((res:Response) => {
        let result = res.json();
        console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
