import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DateTimeHelper } from 'src/app/shared/helpers/datetime-helper';
import { Terminal } from 'src/app/shared/models/terminal.model';
import { TransactionDetail } from 'src/app/shared/models/transaction-detail.model';
import { TransactionSearchQuery } from 'src/app/shared/models/transaction-search-query.model';
import { DialogModalComponent } from 'src/app/shared/widgets/dialog-modal/dialog-modal.component';
import { TransactionService } from '../../shared/services/transaction.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {
  allTransactions: TransactionDetail[] = [];
  transactions: TransactionDetail[] = [];
  searchedTransactions: TransactionDetail[] = [];
  terminals: Terminal[] = [];
  searchQuery: TransactionSearchQuery = new TransactionSearchQuery;
  transactionDetail: TransactionDetail =  new TransactionDetail
  isLoading = false;

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild(DialogModalComponent)
  private modal!: DialogModalComponent;

  openDetail = 0;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getTransactionHistory();
    this.getTerminals();
  }

  getTransactionHistory() {
    this.transactionService.getTransactionHistory().subscribe(response => {
      console.log(response);
      this.allTransactions = response.data
      this.transactions = this.allTransactions;
      this.dtTrigger.next();
    })
  }

  get terminalsInfo() {
    return this.terminals;
  }

  getTerminals(){
    this.transactionService.getTerminals().subscribe(response => {
      console.log(response);
      this.terminals = response.data;
    })
  }

   getTransaction(e: any, transactionRef: string) {
     e.preventDefault();
     let transactionQuery = new TransactionSearchQuery;
     transactionQuery.transactionRef = transactionRef;
     this.transactionService.searchTransactions(transactionQuery).subscribe(response => {
        console.log(response);
        this.transactionDetail = response.data[0];
        //this.displayTransactionDetail(response.data);
     })
   }

  searchTransactions() {
    this.isLoading = true;
    this.searchQuery.dateCreate = this.searchQuery.dateFrom;
    this.transactionService.searchTransactions(this.searchQuery).subscribe((response) => {
      this.isLoading = false;
      this.searchedTransactions = response.data;
      this.transactions = this.searchedTransactions;
      this.rerender();
      console.log(response);
    })
  }

  displayTransactionDetail(details: any) {
    this.openDetail = this.openDetail + 1;
    //this.modal.show();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  covertToDateTime(date: Date | null) {
    return DateTimeHelper.convertIsoToDateTime(date?.toString() ?? "")
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
