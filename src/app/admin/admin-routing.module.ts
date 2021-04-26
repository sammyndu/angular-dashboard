import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "roles",
    component: RoleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
