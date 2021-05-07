import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { ModelService } from 'src/app/shared/services/device/model.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  models: any[] = [];

  //datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  @ViewChild(DialogModalComponent)
  modal!: DialogModalComponent
  modalClass = new Modal

  constructor(private modelService: ModelService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getModels();
  }

  getModels() {
    this.modelService.getModels().subscribe(result => {
      console.log(result);
      this.models = result;
      this.dtTrigger.next()
    })
  }

  openViewModal(id: number) {
    this.modalClass.modalType = ModalType.DeviceModelDetail;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

  openCreateModal() {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceModelCreate;
    this.modalService.message.next(this.modalClass);
  }

  openEditModal(id: number) {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceModelEdit;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

}
