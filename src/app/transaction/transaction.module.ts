import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionDetailItemComponent } from './transaction-detail/transaction-detail-items/transaction-detail-item/transaction-detail-item.component';
import { TransactionDetailItemsComponent } from './transaction-detail/transaction-detail-items/transaction-detail-items.component';



@NgModule({
  declarations: [
    HistoryComponent,
    TransactionDetailComponent,
    TransactionDetailItemComponent,
    TransactionDetailItemsComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot(),
  ]
})
export class TransactionModule { }
