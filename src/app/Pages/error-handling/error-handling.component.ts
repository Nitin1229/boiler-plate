import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css'],
})
export class ErrorHandlingComponent implements OnInit {
  demo: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  errorNotFound() {
    console.log('Not found');
    this.router.navigate(['pages/error/' + 'notFoundError']);
  }
  check() {
    this.demo = !this.demo;
  }
}
