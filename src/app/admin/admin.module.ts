import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './users/user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { AuditListComponent } from './audit-list/audit-list.component';



@NgModule({
  declarations: [UserListComponent, RoleListComponent, PermissionListComponent, AuditListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule
  ]
})
export class AdminModule { }
