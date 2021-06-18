import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DisputeStatus } from 'src/app/shared/models/dispute-status.model';
import { DisputeType } from 'src/app/shared/models/dispute-type';
import { Dispute } from 'src/app/shared/models/dispute.model';
import { DisputeService } from 'src/app/shared/services/dispute.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dispute-create-edit',
  templateUrl: './dispute-create-edit.component.html',
  styleUrls: ['./dispute-create-edit.component.css']
})
export class DisputeCreateEditComponent implements OnInit, OnDestroy {

  dispute: Dispute = new Dispute;
  disputeTypes: DisputeType[] = [];
  disputeStatus: DisputeStatus[] = [];
  formType!: ModalType
  isEdit: boolean = false;

  private messageSubscription!: Subscription

  //modal
  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  @ViewChild('disputeForm') disputeForm!: FormGroupDirective;

  constructor(private modalService: ModalService, private disputeService: DisputeService) { }

  ngOnInit(): void {
    this.messageSubscription = this.modalService.message.subscribe(modal => {
      console.log(modal);
      this.dispute = new Dispute
      this.isEdit = false;
      if(modal.modalType == ModalType.DisputeCreate || modal.modalType == ModalType.DisputeEdit) {
        this.disputeService.getDisputeTypes().subscribe(result => {
          this.disputeTypes = result.data;
        })
        if(modal.content != null) {
          this.isEdit = true;

          this.disputeService.getDispute(modal.content).subscribe(result => {
            this.dispute = result.data;
          })

          this.disputeService.getDisputeStatus().subscribe(result => {
            this.disputeStatus = result.data;
          })
        }
        this.formType = modal.modalType;
        this.modal.show();
      }
    })
  }

  save() {
    console.log("submitted");
    if (this.disputeForm.valid) {
      if(this.formType == ModalType.DisputeCreate) {

        if (this.disputeForm.valid) {
          this.disputeService.addDispute(this.dispute).subscribe(result => {
            console.log(result);
            this.close();
          })
        }

      } else if (this.formType == ModalType.DisputeEdit) {
        this.disputeService.editDispute(this.dispute).subscribe(result => {
          console.log(result);
          this.close();
        })
      }

    }
  }

  close() {
    this.modal.close();
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log("modal closed");
    this.messageSubscription.unsubscribe();
  }

}
