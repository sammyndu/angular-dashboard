import { Component, Input, OnInit } from '@angular/core';
import { TransactionDetail } from 'src/app/shared/models/transaction-detail.model';

@Component({
  selector: 'app-transaction-detail-items',
  templateUrl: './transaction-detail-items.component.html',
  styleUrls: ['./transaction-detail-items.component.css']
})
export class TransactionDetailItemsComponent implements OnInit {

  @Input() transactionDetail: TransactionDetail = new TransactionDetail

  constructor() { }

  ngOnInit() {
  }

}
