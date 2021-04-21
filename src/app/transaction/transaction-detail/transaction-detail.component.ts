import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TransactionDetail } from 'src/app/shared/models/transaction-detail.model';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit, OnChanges {

  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  @Input() transactionDetail!: TransactionDetail

  @Input() open = 0;

  constructor() {

   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(this.transactionDetail.transactionRef != "") {
      //this.transactionDetail = changes['transactionDetail'].currentValue;
      this.show();
      console.log(this.transactionDetail.amount);
    }
  }

  ok() {
    this.close();
  }

  show(): void {
    this.modal.show();
  }

  close(): void {
    this.modal.close();
  }

}
