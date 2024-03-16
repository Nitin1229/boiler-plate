import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PagesRouteRoutingModule } from './pages-route-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { DonutChartComponent } from './chart/donut-chart/donut-chart.component';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { DataShairingComponent } from './data-shairing/data-shairing.component';
import { FormsComponent } from './Forms/forms.component';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './Forms/template-form/template-form.component';
import { LoaderComponent } from './Loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PipeComponent } from './Pipe/pipe.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { GatewayErrorComponent } from './error-handling/gateway-error/gateway-error.component';
import { NotFoundErrorComponent } from './error-handling/not-found-error/not-found-error.component';
import { OtherErrorComponent } from './error-handling/other-error/other-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DisplayFormComponent } from './Forms/display-form/display-form.component';
import { BadRequestComponent } from './error-handling/bad-request/bad-request.component';
import { DatePipeComponent } from './Pipe/date-pipe/date-pipe.component';
import { CurrencyPipeComponent } from './Pipe/currency-pipe/currency-pipe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InputChildComponent } from './data-shairing/input-child/input-child.component';
import { InputParentComponent } from './data-shairing/input-parent/input-parent.component';
import { OutputChildComponent } from './data-shairing/output-child/output-child.component';
import { OutputParentComponent } from './data-shairing/output-parent/output-parent.component';
import { UnrelatedFirstComponent } from './data-shairing/unrelated-first/unrelated-first.component';
import { UnrelatedSecondComponent } from './data-shairing/unrelated-second/unrelated-second.component';
import { ViewchildChildComponent } from './data-shairing/viewchild-child/viewchild-child.component';
import { ViewchildParentComponent } from './data-shairing/viewchild-parent/viewchild-parent.component';
import { AboutComponent } from './about/about.component';
import { EmpSearchComponent } from './employee-details/emp-search/emp-search.component';
import { EmpFilterComponent } from './employee-details/emp-filter/emp-filter.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmployeeDetailsComponent,
    ChartComponent,
    PieChartComponent,
    DonutChartComponent,
    BarChartComponent,
    LineChartComponent,
    DataShairingComponent,
    FormsComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    LoaderComponent,
    PipeComponent,
    ErrorHandlingComponent,
    NotFoundErrorComponent,
    GatewayErrorComponent,
    OtherErrorComponent,
    EmpSearchComponent,
    EmpFilterComponent,
    DisplayFormComponent,
    BadRequestComponent,
    DatePipeComponent,
    CurrencyPipeComponent,
    InputChildComponent,
    InputParentComponent,
    OutputChildComponent,
    OutputParentComponent,
    UnrelatedFirstComponent,
    UnrelatedSecondComponent,
    ViewchildChildComponent,
    ViewchildParentComponent,
    AboutComponent


  ],
  imports: [
    CommonModule,
    PagesRouteRoutingModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
})
export class PagesRouteModule {}
