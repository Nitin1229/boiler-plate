import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  @Input() formData:any;
  formType: string = "";
  form:any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ccc',changes);
    this.formType = this.formData?.["formType"];
    this.form = this.formData?.["form"];
    
  }

}
