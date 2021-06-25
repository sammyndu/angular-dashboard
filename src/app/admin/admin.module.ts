import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './users/user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { AuditListComponent } from './audit-list/audit-list.component';
import { UsersCreateEditComponent } from './users/users-create-edit/users-create-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RolesEditComponent } from './roles/roles-edit/roles-edit.component';
import { UpdateRoleUsersComponent } from './roles/update-role-users/update-role-users.component';
import { UpdateRolePermissionsComponent } from './roles/update-role-permissions/update-role-permissions.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [UserListComponent, RoleListComponent, PermissionListComponent, AuditListComponent, UsersCreateEditComponent, RolesEditComponent, UpdateRoleUsersComponent, UpdateRolePermissionsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule,
    SharedModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AdminModule { }
