import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Modal } from 'src/app/shared/models/modal';
import { ComponentService } from 'src/app/shared/services/device/component.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  components: any[] = [];

  //datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  modalClass: Modal = new Modal;

  constructor(private componentService: ComponentService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getComponents()
  }

  getComponents() {
    this.componentService.getComponents().subscribe(result => {
      console.log(result);
      this.components = result
      this.dtTrigger.next();
    })
  }


  openCreateModal() {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceComponentCreate;
    this.modalService.message.next(this.modalClass);
  }

  openEditModal(id: number) {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceComponentEdit;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

  openDetailModal(id: number) {
    this.modalClass = new Modal
    this.modalClass.modalType = ModalType.DeviceComponentDetail;
    this.modalClass.content = id
    this.modalService.message.next(this.modalClass);
  }

}
