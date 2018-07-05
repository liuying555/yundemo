import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../animations/fade-in';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { CommonService } from '../../../services/common/common.service';
import {StudentServiceService } from './services/student-service.service';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  animations: [ fadeIn ]
})
export class StudentsComponent implements OnInit {
  studentSelect: any;
  public userList: any[];
  public list: any[];

  constructor(private commonService: CommonService , private studentServiceService: StudentServiceService,
              private http: HttpClient, private jsonp: HttpClientJsonpModule ) { }

  ngOnInit() {
    this.commonService.studentSelectList().subscribe((result: any ) => {
      this.studentSelect = result.grade ;
    });
    this.studentServiceService.tableShow();
  }
  requestData() {
   //  alert('请求数据');
    const  _that = this;
    const url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).subscribe(function(data) {

        console.log(data);

        const list = data;
      //  console.log(_that.list['result']);

      _that.list = list['result'];


    },function (err) {

      console.log(err);
    });


  }

}
