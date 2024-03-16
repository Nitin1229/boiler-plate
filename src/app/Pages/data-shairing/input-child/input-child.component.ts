import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {
  @Input() dataFrmInputParent!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
