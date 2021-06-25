import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { UserService } from 'src/app/shared/services/admin/user.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  modalClass: Modal = new Modal

  modalClosedSubscription!: Subscription;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userService: UserService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getUsers();
    this.modalClosedSubscription = this.modalService.closed.subscribe((modal) => {
      console.log("yes");
      if(modal.modalType == ModalType.UserCreate || modal.modalType == ModalType.UserEdit) {
        this.refreshUsers();
      }
    })
  }

  getUsers() {
    this.userService.getUsers().subscribe((result) => {
      console.log(result);
      const users = result.data
      this.users = [...users];
      this.dtTrigger.next();
    })
  }

  refreshUsers() {
    this.userService.getUsers().subscribe((result) => {
      console.log(result);
      const users = result.data
      this.users = [...users];
      this.rerender();
    })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  viewAcquirer(id: number) {
    this.modalClass.modalType = ModalType.UserDetail;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

  openCreateModal() {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.UserCreate;
    this.modalService.message.next(this.modalClass);
  }

  openEditModal(id: number) {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.UserEdit;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

}
