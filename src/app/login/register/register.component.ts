import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private Service: DataServiceService,
    private route: Router
  ) {
    // this.createRegisterForm();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,
       Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$')]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // createRegisterForm() {

  // }

  async register() {
    console.log(this.registerForm)
    if (this.registerForm.valid) {
      await this.Service.login(this.registerForm.value, 'ywie2dsfhd');
      // this.Service.notAdminLogin = true;
      this.Service.userLogin = true;
      console.log('sess 1', this.Service.userLogin);
      Swal.fire({
         text: 'Registered Successfully!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
        cancelButtonText: 'No',
         allowOutsideClick: false,
         allowEscapeKey: false,
         }).then(() => {
        this.route.navigate(['login/log-in']);
         });
        
      this.registerForm.reset();
    }
  }

  invalidName() {
    return (
      this.registerForm.get('name')?.hasError('required') &&
      this.registerForm.get('name')?.dirty
    );
  }

  invalidEmail() {
    return (
      this.registerForm.get('email')?.hasError('required') &&
      this.registerForm.get('email')?.dirty
    );
  }

  invalidPassword() {
    return (
      this.registerForm.get('password')?.hasError('required') &&
      this.registerForm.get('password')?.dirty
    );
  }

  isDisableRegisterButton() {
    return (
      this.registerForm.invalid
    );
  }
}
