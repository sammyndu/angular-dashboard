import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Acquirer } from 'src/app/shared/models/acquirer.model';
import { Modal } from 'src/app/shared/models/modal';
import { AcquirerService } from 'src/app/shared/services/acquirer.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-acquirer-list',
  templateUrl: './acquirer-list.component.html',
  styleUrls: ['./acquirer-list.component.css']
})
export class AcquirerListComponent implements OnInit {

  acquirers: Acquirer[] = [];

  //datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  modalClass: Modal = new Modal

  constructor(private acquirerSevice: AcquirerService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getAcquirer();
  }

  getAcquirer() {
    this.acquirerSevice.getAcquirers().subscribe(result => {
      console.log(result);
      this.acquirers = result.data;
      this.dtTrigger.next();
    })
  }

  viewAcquirer(id: number) {
    this.modalClass.modalType = ModalType.AcquirerDetail;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

  openCreateModal() {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.AcquirerCreate;
    this.modalService.message.next(this.modalClass);
  }

  openEditModal(id: number) {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.AcquirerEdit;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

}
