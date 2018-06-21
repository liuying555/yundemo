import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../animations/fade-in';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { CommonService } from '../../../services/common/common.service';
import {StudentServiceService } from './services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  animations: [ fadeIn ]
})
export class StudentsComponent implements OnInit {
  studentSelect: any;

  constructor(private commonService: CommonService, private studentServiceService: StudentServiceService) { }

  ngOnInit() {
    this.commonService.studentSelectList().subscribe((result: any ) => {
      this.studentSelect = result.grade ;
    });

    this.studentServiceService.tableShow();

  }

}
