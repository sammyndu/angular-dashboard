import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DeviceComponent } from 'src/app/shared/models/device-component.model';
import { ComponentService } from 'src/app/shared/services/device/component.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-component-create-edit',
  templateUrl: './component-create-edit.component.html',
  styleUrls: ['./component-create-edit.component.css']
})
export class ComponentCreateEditComponent implements OnInit {

  title = "";

  isEdit = false;

  component: DeviceComponent = new DeviceComponent;

  modalEventSubscription!: Subscription;

  private formType!: ModalType

  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  @ViewChild('deviceComponentForm') deviceComponentForm!: FormGroupDirective

  constructor(private modalService: ModalService, private componentService: ComponentService) { }

  ngOnInit(): void {
    this.modalEventSubscription = this.modalService.message.subscribe(modalDialog => {
      this.component = new DeviceComponent
      if(modalDialog.modalType == ModalType.DeviceComponentCreate || modalDialog.modalType == ModalType.DeviceComponentEdit) {
        this.title = "Create Component";
        if (modalDialog.content != null) {
          this.title = "Edit Component";
          this.componentService.getComponent(modalDialog.content).subscribe(result => {
            console.log(result);
            this.component = result;
          })
        }
        this.modal.show();
      }
    })
  }

  save() {
    console.log("submitted");
    if (this.deviceComponentForm.valid) {
      if(this.formType == ModalType.DeviceComponentCreate) {

        if (this.deviceComponentForm.valid) {
          this.componentService.addComponent(this.component).subscribe(result => {
            console.log(result);
            this.close();
          })
        }

      } else if (this.formType == ModalType.DisputeEdit) {
        this.componentService.editComponent(this.component).subscribe(result => {
          console.log(result);
          this.close();
        })
      }

    }
  }

  close() {
    this.modal.close();
  }

}
