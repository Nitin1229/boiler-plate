import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-emp-filter',
  templateUrl: './emp-filter.component.html',
  styleUrls: ['./emp-filter.component.css'],
})
export class EmpFilterComponent implements OnInit {
  filterForm!: FormGroup;
  @Output() filter = new EventEmitter();
  filterModalRef!: BsModalRef;
  tripsRange: any;

  constructor(private fb: FormBuilder, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      name: [''],
      startYear: [''],
      endYear: [''],
      tripRange: [''],
    });
  }
  onFormSubmit() {
    console.log('form submitted', this.filterForm);
    this.filter.emit(this.filterForm);
    this.filterModalRef.hide();
  }

  clear() {
    this.filterForm.reset();
  }

  openFilterTemp(filter_temp: any) {
    this.filterModalRef = this.modalService.show(filter_temp, {
      backdrop: 'static',
      keyboard: false,
    });
  }

  numeric_keypress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  check(event: any) {
    console.log(event.target.value, 'SS');
    if (event.target.value >= 1900 && event.target.value < 2100) {
      return true;
    } else {
      return false;
    }
  }
}
