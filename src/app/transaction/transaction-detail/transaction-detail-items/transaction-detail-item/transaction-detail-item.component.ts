import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-detail-item',
  templateUrl: './transaction-detail-item.component.html',
  styleUrls: ['./transaction-detail-item.component.css']
})
export class TransactionDetailItemComponent implements OnInit {

  @Input() title: string = "";

  @Input() value: string = "";

  @Input() isAmount: boolean =  false;

  constructor() { }

  ngOnInit() {
  }

}
