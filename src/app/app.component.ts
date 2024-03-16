import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DataServiceService } from './shared/service/data-service.service';
export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Boilerplate';
  login: boolean = false;
  constructor(
    private ActRoute: ActivatedRoute,
    private route: Router,
    private service: DataServiceService
  ) {
    this.route.events.subscribe((event: any) => {
      console.log('123 check', event, this.service.getToken());
      if (event instanceof NavigationStart) {
        browserRefresh = !this.route.navigated;
        if (browserRefresh === true) {
          sessionStorage.clear();
        }
        if (event.url.includes('/log-in')) {
          event.url = '/';
        }

        if (this.service.getToken()) {
          this.login = true;
        } else {
          this.login = false;
        }
        console.log('what is in login', this.login);
      }
    });
  }

  ngOnInit(): void {
    if (window.location.origin.includes('localhost')) {
      console.log('123');
    }
    let obj = {
      user_name: 'abc',
      password: 'abc@123',
    };
    localStorage.setItem('user_name', 'abc');
    localStorage.setItem('password', 'abc@123');
    localStorage.setItem('admin', JSON.stringify(obj));
    window.onload = function () {
      sessionStorage.clear();
    };
  }
}
