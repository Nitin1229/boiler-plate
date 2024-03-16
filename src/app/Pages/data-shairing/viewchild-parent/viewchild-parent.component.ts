import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit {

  @ViewChild(ViewchildChildComponent) public viewchildChildComp !: ViewchildChildComponent;
  dataFrmChild!:string;
  constructor() { }

  ngOnInit(): void {
  }

  fetchChildData(){
    this.dataFrmChild = this.viewchildChildComp.dataToViewChild;
  }
  clearChildData(){
    this.viewchildChildComp.dataToViewChild = "";
    this.dataFrmChild = ""
  }

}
