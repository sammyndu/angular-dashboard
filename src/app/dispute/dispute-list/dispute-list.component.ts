import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Dispute } from 'src/app/shared/models/dispute.model';
import { Modal } from 'src/app/shared/models/modal';
import { DisputeService } from 'src/app/shared/services/dispute.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dispute-list',
  templateUrl: './dispute-list.component.html',
  styleUrls: ['./dispute-list.component.css']
})
export class DisputeListComponent implements OnInit, OnDestroy {

  disputes: Dispute[] = [];
  modal = new Modal;

  private subscription!: Subscription

  //datatable
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isTableLoading = false;

  constructor(private disputeService: DisputeService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getDisputes();
    this.onModalClose();
  }

  getDisputes() {
    this.isTableLoading = true;
    this.disputeService.getDisputes().subscribe(result => {
      this.isTableLoading = false;
      console.log(result);
      this.disputes = result;
      this.dtTrigger.next()
    })
  }

  openDetailModal(id: number) {
    this.modal.modalType = ModalType.DisputeDetail;
    this.modal.content = id;
    this.modalService.message.next(this.modal);
  }

  openCreateModal() {
    this.modal = new Modal
    this.modal.modalType = ModalType.DisputeCreate;
    //this.modal.content = id;
    this.modalService.message.next(this.modal);
  }

  openEditModal(id: number) {
    this.modal = new Modal
    this.modal.modalType = ModalType.DisputeEdit;
    this.modal.content = id;
    this.modalService.message.next(this.modal);
  }

  getStatusClass(status: string) {
    if(status == "Pending") {
      return "label label-warning"
    } else if(status == "In Progress") {
      return "label label-info"
    } else {
      return "label label-succes"
    }
  }

  onModalClose() {
    this.subscription = this.modalService.closed.subscribe(() => {
      this.disputeService.getDisputes().subscribe(result => {
        this.isTableLoading = false;
        console.log(result);
        this.disputes = result;
        this.rerender()
      })
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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    this.subscription.unsubscribe();
  }
}
