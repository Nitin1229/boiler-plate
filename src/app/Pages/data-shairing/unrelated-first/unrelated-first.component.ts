import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-unrelated-first',
  templateUrl: './unrelated-first.component.html',
  styleUrls: ['./unrelated-first.component.css']
})
export class UnrelatedFirstComponent implements OnInit {
  contactNo!:number;
  latestContactNo!:number

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.contactNumberSubject.subscribe(res=>{
      this.latestContactNo = res;
      console.log(this.latestContactNo);

    })
  }
  updateContact(){
    this.dataService.updateContactNumber(this.contactNo);

  }
  isNumberKey(evt: any) {
    let temp = evt?.target?.value;
    if (!(temp.length > 9)) {
      if (
        (evt.key >= "0" && evt.key <= "9") ||
        evt.key == "Backspace" ||
        evt.key == "Delete" ||
        evt.key == "ArrowLeft" ||
        evt.key == "ArrowRight"
      ) {
        return true;
      }
    }
    return false;
  }

}
