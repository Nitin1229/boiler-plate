import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  count = sessionStorage.getItem('count');
  title : any ='Angular Boilerplate'
  constructor(private route: Router) {}

  ngOnInit(): void {
    console.log(this.count);
    if (this.count == '1') {
      document.getElementById('sidebtn')?.click();
      sessionStorage.setItem('count', '2');
    }
  }
}
