import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  reactiveFormData!: FormGroup;
  templateFormData!: FormGroup;
  formType: string = '';
  formData: Object = {};
  showFormData: boolean = false;

  ngOnInit(): void {}

  setFormData(event: any, formType: string) {
    this.showFormData = true;
    if (formType?.toLowerCase() === 'reactive') {
      this.reactiveFormData = event;
      this.formData = event;
      this.formType = 'reactive';
    }

    if (formType?.toLowerCase() === 'template') {
      this.templateFormData = event;
      this.formData = event;
      this.formType = 'template';
    }
  }
}
