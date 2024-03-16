import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent implements OnInit {

  @Output() searchEmp = new EventEmitter();
  searchText!:string;

  constructor() { }

  ngOnInit(): void {
  }
  searchInEmp(){

    this.searchEmp.emit(this.searchText);

  }

}
