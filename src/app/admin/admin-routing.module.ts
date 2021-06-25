import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { AuditListComponent } from './audit-list/audit-list.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RolesEditComponent } from './roles/roles-edit/roles-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "roles",
    component: RoleListComponent
  },
  {
    path: "roles/edit/:id",
    component: RolesEditComponent
  },
  {
    path: "permissions",
    component: PermissionListComponent
  },
  {
    path: "audits",
    component: AuditListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
