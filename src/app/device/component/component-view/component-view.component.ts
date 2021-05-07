import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { DeviceComponent } from 'src/app/shared/models/device-component.model';
import { ComponentService } from 'src/app/shared/services/device/component.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.css']
})
export class ComponentViewComponent implements OnInit {

  component: DeviceComponent = new DeviceComponent

  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;
  private modalEventSubscription!: Subscription

  constructor(private modalService: ModalService, private componentService: ComponentService) { }

  ngOnInit(): void {
    this.modalEventSubscription = this.modalService.message.subscribe(modal => {
      console.log('entered');
      if(modal.modalType == ModalType.DeviceComponentDetail) {
        this.componentService.getComponent(modal.content).subscribe(result => {
          console.log(result)
          this.component = result
          this.modal.show()
        })
      }
    })

  }

}
