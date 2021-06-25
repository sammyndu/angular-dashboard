import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { Permission } from 'src/app/shared/models/permissions.model';
import { Role } from 'src/app/shared/models/role.model';
import { User } from 'src/app/shared/models/user.model';
import { RoleService } from 'src/app/shared/services/admin/role.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.css']
})
export class RolesEditComponent implements OnInit {

  isLoading = false;
  role = new Role;

  associatedUsers: User[] = [];
  allUsers: User[] = [];

  associatedPermissions: Permission[] = [];
  allPermissions: Permission[] = [];

  modalClass = new Modal;

  modalClosedSubscription!: Subscription;

  //modal
  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;


  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger1: Subject<any> = new Subject<any>();
  dtTrigger2: Subject<any> = new Subject<any>();

  @ViewChild('editRoleForm') editRoleForm!: FormGroupDirective;

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.role.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.getRole();
    this.getUsers();
    this.getPermissions();
    console.log(this.role.id);

    this.modalClosedSubscription = this.modalService.closed.subscribe((modal) => {
      console.log("yes");
      if(modal.modalType == ModalType.UpdateRoleUsers) {
        this.refreshUsers();
      }
    })
  }

  getRole() {
    this.roleService.getRole(this.role.id).subscribe((response) => {
      this.role = response.data;
      console.log(response);
    })
  }

  getPermissions() {
    this.roleService.getPermissions(this.role.id).subscribe(response => {
      this.associatedPermissions = response.data;
      this.dtTrigger1.next();
      console.log(response);
    })
  }

  getUsers() {
    this.roleService.getUsers(this.role.id).subscribe(response => {
      this.associatedUsers =  response.data;
      this.dtTrigger2.next();
      console.log(response);
    })
  }

  openModal() {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.UpdateRoleUsers;
    this.modalClass.content = this.role.id;
    this.modalService.message.next(this.modalClass);
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger2.next();
    });
  }

  refreshUsers(){
    this.roleService.getUsers(this.role.id).subscribe(response => {
      this.associatedUsers = response.data;
      this.dtTrigger2.next();
      console.log(response);
    })
  }

  deleteUserFromRole(id: string) {
    const addedIds: string[] = [];
    const removedIds: string[] = [];
    removedIds.push(id);
    this.roleService.updateRoleUser({ addedIds, removedIds }, this.role.id).subscribe(response => {
      this.toastService.showSuccess(response.message);
      this.associatedUsers = this.associatedUsers.filter(x => x.id != removedIds[0]);
      this.rerender()
      console.log(response);
    })
  }

  updateRole() {
    if (this.editRoleForm.valid) {
      this.isLoading = true;

      this.roleService.updateRole(this.role).subscribe(result => {
        this.isLoading = false;
        console.log(result);
        this.toastService.showSuccess(result.message);
      }, err => {
        this.isLoading = false;
        console.log(err);
        this.toastService.showError(err.error.message);
      })
    }
  }



}
