import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/admin/user.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';
import { RoleService } from 'src/app/shared/services/admin/role.service';
import { Permission } from 'src/app/shared/models/permissions.model';
declare const $: any;

@Component({
  selector: 'app-update-role-users',
  templateUrl: './update-role-users.component.html',
  styleUrls: ['./update-role-users.component.css']
})
export class UpdateRoleUsersComponent implements OnInit {


  title = "";

  isEdit = false;

  users: User[] = [];
  formType!: ModalType;
  isLoading = false;
  modalClass = new Modal;
  roleId!: string;

  associatedUsers: User[] = [];
  addedUsers: User[] = [];
  removedUsers: User[] = [];

  associatedPermissions: Permission[] = [];
  allPermissions: Permission[] = [];

  //modal
  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  private messageSubscription!: Subscription

  @ViewChild('userForm') userForm!: FormGroupDirective;

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private roleService: RoleService ) { }

  ngOnInit(): void {

    this.messageSubscription = this.modalService.message.subscribe((modal) => {
       if(modal.modalType == ModalType.UpdateRoleUsers) {
        this.title = "Update Role Users";
        this.userService.getUsers().subscribe((result) => {
          this.users = result.data;
          this.roleId = modal.content;
          this.getUsers();
          this.modal.show();
        })


      }
    })



    //this.getUsers();
    //$('#pre-selected-options').multiSelect();
  }

  setDropDown() {
    this.dropdownList = [];
    this.selectedItems = [];

    this.users.forEach(user => {
      this.dropdownList.push({ item_id: user.id, item_text: user.email });
    })

    this.associatedUsers.forEach(user => {
      this.selectedItems.push({ item_id: user.id, item_text: user.email });
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    console.log(this.dropdownList, this.selectedItems);

    this.dropdownList = [...this.dropdownList];
    this.selectedItems = [...this.selectedItems];

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text:  'New Delhi' }
    // ];

    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
  }

  getPermissions() {
    this.roleService.getPermissions(this.roleId).subscribe(response => {
      this.associatedPermissions = response.data;
      console.log(response);
    })
  }

  getUsers() {
    this.roleService.getUsers(this.roleId).subscribe(response => {
      this.associatedUsers = response.data;
      console.log(response);
      //this.getAllUsers();
      this.setDropDown();
    })
  }

  save() {
    console.log(this.selectedItems);
    let selectedIds: string[] = [];
    let unSelectedIds: string[] = [];

    this.selectedItems.forEach((x: { item_id: string; }) => {
      if(!this.associatedUsers.find(y => y.id == x.item_id)) {
        selectedIds.push(x.item_id);
      }
    });

    this.associatedUsers.forEach(x => {
      if(!this.selectedItems.find((y: { item_id: string; }) => y.item_id == x.id)) {
        unSelectedIds.push(x.id);
      }
    })

    this.roleService.updateRoleUser({ addedIds: selectedIds, removedIds: unSelectedIds}, this.roleId).subscribe(response => {
      console.log(response);
      this.closeModalEvent();
    })


  }

  trackUsers(index: any, user: User) { return `${index}-${user.id}`; }

  close() {
    this.modal.close();
  }

  closeModalEvent() {
    this.close();
    this.modalClass.modalType = ModalType.UpdateRoleUsers;
    this.modalService.closed.next(this.modalClass);
  }

}
