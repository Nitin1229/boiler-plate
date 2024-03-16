import { EventEmitter,Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
  dataToOutputChild!:string;
  @Output() dataToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(){
    let arg = {data:this.dataToOutputChild};
    this.dataToParent.emit(arg);
  }

}
