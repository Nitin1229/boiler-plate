import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { DataServiceService } from '../service/data-service.service';
import { browserRefresh } from 'src/app/app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  browserRefresh;
  constructor(private service: DataServiceService, private router: Router) {
    this.browserRefresh = browserRefresh;
    console.log('refreshed?:', this.browserRefresh);
  }
  canActivate() {
    if (!this.service.isLoggedIn()) {
      if (this.browserRefresh === true) {
        sessionStorage.clear();
      }
      Swal.fire({
        text: 'Not Authorized',
        icon: 'warning',
        allowOutsideClick: false,
        cancelButtonText: 'OK',
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed === true) {
          sessionStorage.removeItem('token');
          this.service.userLogin = false;
          this.router.navigate(['/']);
        }
      });
    }
    return this.service.isLoggedIn();
  }
}
