import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loader : boolean = false;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  fulPageLoader(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  componentLoader(){
    this.loader = true;

    setTimeout(() => {
      this.loader = false;
    }, 5000);
  }

}
