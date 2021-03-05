import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../pages/users/users.component';
import { UserDetailComponent } from '../pages/user-detail/user-detail.component';
import { MainDashboardComponent } from '../pages/main-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialcontrolsModule } from '../materialcontrols.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersFilterComponent } from './users/users-filter.component';

@NgModule({
  declarations: [
    UserDetailComponent,
    MainDashboardComponent,
    UsersComponent,
    UsersFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialcontrolsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PagesModule {}
