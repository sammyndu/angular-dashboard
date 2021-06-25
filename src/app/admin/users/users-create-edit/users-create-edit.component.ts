import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/admin/user.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-users-create-edit',
  templateUrl: './users-create-edit.component.html',
  styleUrls: ['./users-create-edit.component.css']
})
export class UsersCreateEditComponent implements OnInit {

  title = "";

  isEdit = false;

  user = new User;
  formType!: ModalType;
  isLoading = false;
  modalClass = new Modal;

  //modal
  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  private messageSubscription!: Subscription

  @ViewChild('userForm') userForm!: FormGroupDirective;

  constructor(private modalService: ModalService, private userService: UserService) { }

  ngOnInit(): void {
    this.messageSubscription = this.modalService.message.subscribe((modal) => {
      this.user = new User
      this.formType = modal.modalType;
      console.log("create/edit")
      if(modal.modalType == ModalType.UserCreate ) {
        this.title = "Create User";
        this.modal.show();
      }
      else if(modal.modalType == ModalType.UserEdit) {
        this.title = "Edit User";
        this.userService.getUser(modal.content).subscribe((result) => {
          this.user = result.data;
          this.modal.show();
        })
      }
    })
  }

  save() {
    console.log("submitted");
    if (this.userForm.valid) {
      this.isLoading = true;
      if(this.formType == ModalType.UserCreate) {
        this.userService.addUser(this.user).subscribe(result => {
          this.isLoading = false;
          console.log(result);
          this.closeModal();
        })

      } else if (this.formType == ModalType.UserEdit) {
        this.userService.updateUser(this.user).subscribe(result => {
          this.isLoading = false;
          console.log(result);
          this.closeModal();
        })
      }

    }
  }

  close() {
    this.modal.close();
    //this.messageSubscription.unsubscribe();
    console.log("closed");
  }

  private closeModal() {
    this.modal.close();
    this.modalClass = new Modal
    this.modalClass.modalType = this.formType;
    this.modalService.closed.next(this.modalClass);
  }

}
