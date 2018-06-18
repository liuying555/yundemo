import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../../animations/fade-in';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  animations: [ fadeIn ]
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
