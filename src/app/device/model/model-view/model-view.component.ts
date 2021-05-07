import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DeviceModel } from 'src/app/shared/models/device-model.model';
import { ModelService } from 'src/app/shared/services/device/model.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.css']
})
export class ModelViewComponent implements OnInit {

  model: DeviceModel = new DeviceModel

  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;
  private modalEventSubscription!: Subscription

  constructor(private modalService: ModalService, private modelService: ModelService) { }

  ngOnInit(): void {
    this.modalEventSubscription = this.modalService.message.subscribe(modal => {
      console.log('entered');
      if(modal.modalType == ModalType.DeviceModelDetail) {
        this.modelService.getModel(modal.content).subscribe(result => {
          console.log(result)
          this.model = result
          this.modal.show()
        })
      }
    })

  }

}
