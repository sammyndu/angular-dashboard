import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DeviceModel } from 'src/app/shared/models/device-model.model';
import { DeviceType } from 'src/app/shared/models/device-type.model';
import { ModelService } from 'src/app/shared/services/device/model.service';
import { TypeService } from 'src/app/shared/services/device/type.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-model-create-edit',
  templateUrl: './model-create-edit.component.html',
  styleUrls: ['./model-create-edit.component.css']
})
export class ModelCreateEditComponent implements OnInit {

  model = new DeviceModel
  types: DeviceType[] = []
  private formType!: ModalType
  title = ""

  @ViewChild(DialogModalComponent)
  modal!: DialogModalComponent

  private modalEventSubscription!: Subscription

  @ViewChild('deviceModelForm') deviceModelForm!: FormGroupDirective

  constructor(private modelService: ModelService, private modalService: ModalService, private typeService: TypeService) { }

  ngOnInit(): void {

    this.typeService.getTypes().subscribe(result => {
      this.types = result;
    })

    this.modalEventSubscription = this.modalService.message.subscribe(modalDialog => {
      this.model = new DeviceModel
      if(modalDialog.modalType == ModalType.DeviceModelCreate || modalDialog.modalType == ModalType.DeviceModelEdit) {
        this.title = "Create Model";
        if (modalDialog.content != null) {
          this.title = "Edit Model";
          this.modelService.getModel(modalDialog.content).subscribe(result => {
            console.log(result);
            this.model = result;
          })
        }
        this.modal.show();
      }
    })
  }

  save() {
    console.log("submitted");
    if (this.deviceModelForm.valid) {
      if(this.formType == ModalType.DeviceModelCreate) {

        if (this.deviceModelForm.valid) {
          this.modelService.addModel(this.model).subscribe(result => {
            console.log(result);
            this.close();
          })
        }

      } else if (this.formType == ModalType.DisputeEdit) {
        this.modelService.updateModel(this.model).subscribe(result => {
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
