import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-other-error',
  templateUrl: './other-error.component.html',
  styleUrls: ['./other-error.component.css'],
})
export class OtherErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Swal.fire({
      text: 'Something Went Wrong!',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK',
      cancelButtonText: 'No',
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  }
}
