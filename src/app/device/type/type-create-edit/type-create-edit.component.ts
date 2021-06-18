import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DeviceType } from 'src/app/shared/models/device-type.model';
import { ModelService } from 'src/app/shared/services/device/model.service';
import { TypeService } from 'src/app/shared/services/device/type.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-type-create-edit',
  templateUrl: './type-create-edit.component.html',
  styleUrls: ['./type-create-edit.component.css']
})
export class TypeCreateEditComponent implements OnInit {

  deviceType = new DeviceType
  private formType!: ModalType
  title = ""

  @ViewChild(DialogModalComponent)
  modal!: DialogModalComponent

  private modalEventSubscription!: Subscription

  @ViewChild('deviceTypeForm') deviceTypeForm!: FormGroupDirective

  constructor(private modalService: ModalService, private typeService: TypeService) { }

  ngOnInit(): void {
    this.modalEventSubscription = this.modalService.message.subscribe(modalDialog => {
      this.deviceType = new DeviceType
      if(modalDialog.modalType == ModalType.DeviceTypeCreate || modalDialog.modalType == ModalType.DeviceTypeEdit) {
        this.title = "Create Type";
        if (modalDialog.content != null) {
          this.title = "Edit Type";
          this.typeService.getType(modalDialog.content).subscribe(result => {
            console.log(result);
            this.deviceType = result.data;
          })
        }
        this.modal.show();
      }
    })
  }

  save() {
    console.log("submitted");
    if (this.deviceTypeForm.valid) {
      if(this.formType == ModalType.DeviceModelCreate) {

        if (this.deviceTypeForm.valid) {
          this.typeService.addType(this.deviceType).subscribe(result => {
            console.log(result);
            this.close();
          })
        }

      } else if (this.formType == ModalType.DisputeEdit) {
        this.typeService.editType(this.deviceType).subscribe(result => {
          console.log(result);
          this.close();
        })
      }

    }
  }

  close() {
    this.modal.close()
  }

}
