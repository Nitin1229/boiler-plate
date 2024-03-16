import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  dropdownList: any = [];
  selectedItems: any = [];
  filterModalRef!: BsModalRef;
  formData: any = {};

  dropdownSettings: IDropdownSettings = {};
  @Output() reactiveFormData = new EventEmitter();
  constructor(private _fb: FormBuilder, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.initForm();
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  initForm() {
    this.reactiveForm = this._fb.group({
      user: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'),
        ],
      ],
      option: [null],
      radioOption: [null],
      multiSelect: [null],
      check: [false],
      onchecked: [''],
    });
  }

  submitForm() {
    this.formData = this.reactiveForm.value;
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.valid);
    console.log(this.formData, 'SS');

    // alert("Submitted");
    // this.reactiveFormData.emit(this.reactiveForm.value);
    // this.reactiveForm.reset();
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  openFilterTemp(filter_temp: any) {
    this.filterModalRef = this.modalService.show(filter_temp, {
      backdrop: 'static',
      keyboard: false,
    });
  }
}
