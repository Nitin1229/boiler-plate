import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css'],
})
export class DatePipeComponent implements OnInit {
  dateFormats: any = [];
  datePipeForm = new FormGroup({
    date: new FormControl(),
    dateFormats: new FormControl(),
    output: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {
    this.dateFormats = [
      'DD/MM/YYYY',
      'DD-MM-YYYY',
      'MM-DD-YYYY',
      'MM/DD/YYYY',
      'YYYY-MM-DD',
    ];
  }
  dateFormat() {
    let date = this.datePipeForm.get('date')?.value;
    let dateFormats = this.datePipeForm.get('dateFormats')?.value;
    let output = moment(date).format(dateFormats);
    console.log(output);
    this.datePipeForm.get('output')?.setValue(output);
  }
}
