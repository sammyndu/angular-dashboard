import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Acquirer } from 'src/app/shared/models/acquirer.model';
import { AcquirerService } from 'src/app/shared/services/acquirer.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-acquirer-create-edit',
  templateUrl: './acquirer-create-edit.component.html',
  styleUrls: ['./acquirer-create-edit.component.css']
})
export class AcquirerCreateEditComponent implements OnInit {

  acquirer: Acquirer = new Acquirer;
  isEdit: boolean = false;
  title: string = ""
  modalRef!: BsModalRef
  formType!: ModalType

  private messageSubscription!: Subscription

  //modal
  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  @ViewChild('acquirerForm') acquirerForm!: FormGroupDirective;

  constructor(private modalService: ModalService, private acquirerSevice: AcquirerService) { }

  ngOnInit(): void {
    this.messageSubscription = this.modalService.message.subscribe((modal) => {
      this.acquirer = new Acquirer
      console.log("create/edit")
      if(modal.modalType == ModalType.AcquirerCreate ) {
        this.title = "Create Acquirer";
        this.modal.show();
      }
      else if(modal.modalType == ModalType.AcquirerEdit ) {
        this.title = "Edit Acquirer";
        this.acquirerSevice.getAcquirer(modal.content).subscribe((result) => {
          this.acquirer = result.data;
          this.modal.show();
        })
      }
    })
  }

  save() {
    console.log("submitted");
    if (this.acquirerForm.valid) {
      if(this.formType == ModalType.AcquirerCreate) {

        if (this.acquirerForm.valid) {
          this.acquirerSevice.addAcquirer(this.acquirer).subscribe(result => {
            console.log(result);
            this.close();
          })
        }

      } else if (this.formType == ModalType.AcquirerEdit) {
        this.acquirerSevice.editAcquirer(this.acquirer).subscribe(result => {
          console.log(result);
          this.close();
        })
      }

    }
  }

  close() {
    this.modal.close();
    //this.messageSubscription.unsubscribe();
    console.log("closed");
  }

  // @HostListener('unloaded')
  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }


}
