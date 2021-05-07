import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Dispute } from 'src/app/shared/models/dispute.model';
import { DisputeService } from 'src/app/shared/services/dispute.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dispute-view',
  templateUrl: './dispute-view.component.html',
  styleUrls: ['./dispute-view.component.css']
})
export class DisputeViewComponent implements OnInit {

  @Input() id!: number;
  dispute!: Dispute;

  //modal
  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  constructor(private disputeService: DisputeService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.openModal();
  }

  getDispute() {
    this.disputeService.getDispute(this.id).subscribe(result => {
      console.log(result);
      this.dispute = result.data;
    })
  }

  openModal() {
    this.modalService.message.subscribe((modal) => {
      if(modal.modalType == ModalType.DisputeDetail) {
        this.id = modal.content;
        this.modal.show();
        this.getDispute();
      }
    })
  }

}
