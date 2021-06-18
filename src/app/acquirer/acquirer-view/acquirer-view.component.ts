import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalType } from 'src/app/shared/enums/modal.enum';
import { Acquirer } from 'src/app/shared/models/acquirer.model';
import { AcquirerService } from 'src/app/shared/services/acquirer.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-acquirer-view',
  templateUrl: './acquirer-view.component.html',
  styleUrls: ['./acquirer-view.component.css']
})
export class AcquirerViewComponent implements OnInit {

  acquirer: Acquirer = new Acquirer

    //modal
    @ViewChild(DialogModalComponent)
    private modal!: DialogModalComponent;

  constructor(private modalService: ModalService, private acquirerService: AcquirerService) { }

  ngOnInit(): void {
    this.openModal();
  }

  openModal() {
    console.log('outside')
    this.modalService.message.subscribe((modal) => {
      console.log('entered')
      if(modal.modalType == ModalType.AcquirerDetail) {
        this.acquirerService.getAcquirer(modal.content).subscribe(result => {
          this.acquirer = result.data;
          this.modal.show();
        })
      }
    })
  }

}
