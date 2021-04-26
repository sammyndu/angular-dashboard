import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './users/user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RoleListComponent } from './roles/role-list/role-list.component';



@NgModule({
  declarations: [UserListComponent, RoleListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule
  ]
})
export class AdminModule { }
