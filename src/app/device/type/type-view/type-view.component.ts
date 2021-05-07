import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DeviceType } from 'src/app/shared/models/device-type.model';
import { TypeService } from 'src/app/shared/services/device/type.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-type-view',
  templateUrl: './type-view.component.html',
  styleUrls: ['./type-view.component.css']
})
export class TypeViewComponent implements OnInit {

  type: DeviceType = new DeviceType


  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;
  private modalEventSubscription!: Subscription

  constructor(private modalService: ModalService, private typeService: TypeService) { }

  ngOnInit(): void {
    this.modalEventSubscription = this.modalService.message.subscribe(modal => {
      console.log('entered');
      if(modal.modalType == ModalType.DeviceTypeDetail) {
        this.typeService.getType(modal.content).subscribe(result => {
          console.log(result)
          this.type = result
          this.modal.show()
        })
      }
    })

  }



}
