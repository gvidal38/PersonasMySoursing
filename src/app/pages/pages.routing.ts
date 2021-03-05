import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '../pages/users/users.component';
import { UserDetailComponent } from '../pages/user-detail/user-detail.component';
import { MainDashboardComponent } from '../pages/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      { path: 'dashboard', component: UsersComponent },
      { path: 'detail/:action', component: UserDetailComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
