import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin-dashboard/dashboard/dashboard.component';
import { SideDashboardComponent } from './components/admin-dashboard/side-dashboard/side-dashboard.component';
import { StatsDashboardComponent } from './components/admin-dashboard/stats-dashboard/stats-dashboard.component';
import { TableDashboardComponent } from './components/admin-dashboard/table-dashboard/table-dashboard.component';
import { HeaderComponent } from './components/home/header/header.component';
import { RouterModule , Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component';
import { HeaderDashboardComponent } from './components/admin-dashboard/header-dashboard/header-dashboard.component';
import { ChartsComponent } from './components/admin-dashboard/charts/charts.component';
import { MainDashboardComponent } from './components/admin-dashboard/pages/main-dashboard/main-dashboard.component';
import { CategoriesComponent } from './components/admin-dashboard/categories/categories.component';
import { OrdersComponent } from './components/admin-dashboard/orders/orders.component';
import { AuthInterceptorProvider } from './services/interceptors/auth.interceptor';

const routes : Routes = [
  {
    path : "",
    component : HomeComponent,
    title : "Home"
  },  
  {
    path : "dashboard",
    component : DashboardComponent,
    title : "Admin Dashborad",
    children : [
      {
        path : "",
        component : MainDashboardComponent
      },
      {
        path :"categories",
        component: CategoriesComponent
      },
      {
        path:"orders",
        component: OrdersComponent
      },
      {
        path : "users",
        component : TableDashboardComponent
      }
    ]
  }

]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideDashboardComponent,
    StatsDashboardComponent,
    TableDashboardComponent,
    HeaderComponent,
    HomeComponent,
    HeaderDashboardComponent,
    ChartsComponent,
    MainDashboardComponent,
    CategoriesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
