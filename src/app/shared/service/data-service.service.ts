import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  userLogin: boolean = false;
  notAdminLogin: boolean = false;
  userDetails: any;
  contactNumberSubject = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private route: Router) {}

  getEmployeeDetials(pageNo: any, itemsPerPageList: any): Observable<any> {
    return this.http.get(
      'https://api.instantwebtools.net/v1/passenger?page=' +
        (pageNo - 1) +
        '&size=' +
        itemsPerPageList
    );
  }

  getToken() {
    console.log(sessionStorage.getItem('token'));
    return sessionStorage.getItem('token') != null ? true : false;
  }

  isLoggedIn(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  public login(val: any, params: string) {
    // const adminData = JSON.parse(localStorage.getItem(admin));
    // sessionStorage.setItem('token', params);
    sessionStorage.setItem('username', val.name);
    sessionStorage.setItem('password', val.password);
    sessionStorage.setItem('data', JSON.stringify(val));
    // return this.accessAllow;
  }

  logout() {
    sessionStorage.clear();
    this.route.navigate(['login/log-out']);
  }

  loginAccess(val: any) {
    const adminName = sessionStorage.getItem('username');
    const adminPass = sessionStorage.getItem('password');
    console.log('params', val, adminName, adminPass);
    if (val.username == adminName && val.password == adminPass) {
      sessionStorage.setItem('token', 'ASHHSVJD QYFCDVWDHWVEWH');
      sessionStorage.setItem('count', '1');
      // this.accessAllow = true;
      this.userDetails = true;
    } else {
      this.userDetails = false;
    }
    return this.userDetails;
  }

  updateContactNumber(data: number) {
    this.contactNumberSubject.next(data);
  }
}
