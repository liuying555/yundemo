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

  constructor(private commonService: CommonService , private studentServiceService: StudentServiceService,
              private http: HttpClient, private jsonp: HttpClientJsonpModule ) { }

  ngOnInit() {
    this.commonService.studentSelectList().subscribe((result: any ) => {
      this.studentSelect = result.grade ;
    });

    this.studentServiceService.getUserList().subscribe((data) => {
      console.log(data);
      this.userList = data.items;
    });
    this.studentServiceService.tableShow();
    this.studentServiceService.getBillTypes();
  }
  requestData() {
    alert();

  }

}
