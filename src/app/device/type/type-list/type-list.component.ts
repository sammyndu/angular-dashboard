import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { TypeService } from 'src/app/shared/services/device/type.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types: any[] = [];

  //datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  @ViewChild(DialogModalComponent)
  modal!: DialogModalComponent
  modalClass = new Modal

  constructor(private typeService: TypeService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    this.typeService.getTypes().subscribe(result => {
      console.log(result);
      this.types = result.data;
      this.dtTrigger.next();
    })
  }

  openViewModal(id: number) {
    this.modalClass.modalType = ModalType.DeviceTypeDetail;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

  openCreateModal() {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceTypeCreate;
    this.modalService.message.next(this.modalClass);
  }

  openEditModal(id: number) {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceTypeEdit;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

}
