import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/service/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logIn: boolean = false;
  constructor(public service: DataServiceService) {}

  ngOnInit(): void {
    console.log(
      'sess',
      sessionStorage.getItem('token'),
      this.service.userLogin
    );

    this.logIn = this.service.getToken();
  }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById('mySidenav')!.style.width = '250px';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('mySidenav')!.style.width = '0';
  }

  logout(value: any) {
    this.service.userLogin = false;
    console.log('val-->', value);
    if (value == 'logout') {
      this.service.logout();
    }
  }
}
