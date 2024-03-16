# Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Features

- Lazy loading
- Auth guard
- Http interceptor
- Routing
- Common Service
- Header component
- Left menu component
- Not found component
- Login component
- Logout component
- Register component
- Search Functionality
- Filter Functionality
- Pagination
- Bar Chart
- Line Chart
- Pie Chart
- Donut Chart
- Reactive Form
- Template Driven Form
- Loaders
- Error Handling
- Pipes
- Data Sharing

## login component

- Login-page:
  When user run this boilerplate, they will be routed to to this login page where they have to enter "Username" and "Password". If they haven't register then, a swal pop-up will be fired and after, clicking on "Ok" button, they will be routed to register page.

- Register:
  New user has to register using "Email", "Username" and "Password".

- Logout-page:
  When a user log-out, we will redirect them to this page.

## Pages component

- Home:
  After user login, they will be routed to this page.

- Employee-details:
  The employee details that we got from 'https://api.instantwebtools.net/v1/passenger' API are showned here.

## Not Found component

If the route is not found, then users are routed to this component.

## Shared

- Auth Guard
  Unauthorized user won't be able to access the particular route.

- Service
  APIs call and common functions are declared here.

- Http interceptor:
  Intercept all the request and response calls and modify them to our requirement.

## Routing

All routing functionality between pages/components are added here.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
