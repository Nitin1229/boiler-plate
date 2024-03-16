import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loginRequest: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: DataServiceService,
    private route: Router
  ) {
    // this.initializeForm();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('form', this.loginForm);
  }

  login() {
    this.service.userLogin = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginRequest = Object.assign({}, this.loginForm.value);
    console.log('what is in form valye', this.loginForm.value);
    const res = this.service.loginAccess(this.loginForm.value);
    this.loginForm.reset();
    console.log('res', res);
    if (res === true) {
      this.route.navigate(['pages/home']);
    } else {
      this.service.userLogin = false;
      Swal.fire({
        icon: 'error',
        // text: 'Invalid Username/Password',
        title: 'No User Found',
        text: 'Please Register',
        allowOutsideClick: false,
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed === true) {
          sessionStorage.removeItem('token');
          this.route.navigate(['/login/register']);
        }
      });
    }
  }

  invalidUsername() {
    return (
      this.loginForm?.get('username')?.hasError('required') &&
      this.loginForm?.get('username')?.dirty
    );
  }

  invalidPassword() {
    return (
      this.loginForm?.get('password')?.hasError('required') &&
      this.loginForm?.get('password')?.dirty
    );
  }

  isDisableLoginButton() {
    return (
      this.loginForm.invalid
    );
  }
}
