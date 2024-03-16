import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from '../shared/guards/authguard.guard';
import { ChartComponent } from './chart/chart.component';
import { DataShairingComponent } from './data-shairing/data-shairing.component';
import { LoaderComponent } from './Loader/loader.component';
import { FormsComponent } from './Forms/forms.component';
import { PipeComponent } from './Pipe/pipe.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'employee-details',
    pathMatch: 'full',
    component: EmployeeDetailsComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'chart',
    pathMatch: 'full',
    component: ChartComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'chart',
    pathMatch: 'full',
    component: ChartComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'loader',
    pathMatch: 'full',
    component: LoaderComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'dataShairing',
    pathMatch: 'full',
    component: DataShairingComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'forms',
    pathMatch: 'full',
    component: FormsComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'pipe',
    pathMatch: 'full',
    component: PipeComponent,
    canActivate: [AuthguardGuard],
  },

  {
    path: 'error',
    pathMatch: 'full',
    component: ErrorHandlingComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    canActivate: [AuthguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRouteRoutingModule {}
