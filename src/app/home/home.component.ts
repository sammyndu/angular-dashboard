import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Dashboard } from '../shared/models/dashboard.model';
import { Terminal } from '../shared/models/terminal.model';
import { DashboardService } from '../shared/services/dashboard.service';
declare const c3: any;
declare const Morris: any;
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  dashboardModel: Dashboard = new Dashboard;
  terminals: Terminal[] = []
  onlineTerminalPercentage: number = 0;
  offlineTerminalPercentage: number = 0;
  //activeTerminalPercentage: number = 0;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.getEmptyTerminals();
    this.getDashboardData();
  }

  getDashboardData() {
    //$('#myTable').DataTable();
    this.dashboardService.getDashboardData().subscribe((dashboard) => {
      this.dashboardModel = dashboard;
      this.terminals =  this.dashboardModel.terminals;
      this.dtTrigger.next();
      console.log(dashboard);
      console.log(dashboard.offlineTerminalCount);
      this.onlineTerminalPercentage = this.calculateTerminalPercentage(dashboard.onlineTerminalCount);
      this.offlineTerminalPercentage = this.calculateTerminalPercentage(dashboard.offlineTerminalCount);
      this.getDepositStats();
      
    })
  }

  calculateTerminalPercentage(terminalCount: number) {
    return (terminalCount/this.dashboardModel.totalTerminalCount)*100;
  }


  getEmptyTerminals() {
    var chart = c3.generate({
      bindto: '#predict',
      data: {
          columns: [
              ['data', 91.4]
          ],
          type: 'gauge',
          onclick: function (d: any, i: any) { console.log("onclick", d, i); },
          onmouseover: function (d: any, i: any) { console.log("onmouseover", d, i); },
          onmouseout: function (d: any, i: any) { console.log("onmouseout", d, i); }
      },

      color: {
          pattern: ['#ff9041', '#007bff', '#24d2b5', '#6772e5'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      },
      gauge: {
          width:22,      
      },
      size: {
          height: 120,
          width:150
      }
      });
  }

  getDepositStats() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    Morris.Area({
      element: 'deposit-chart',
      data: this.dashboardModel.transactionChartData,
      xkey: 'mdate',
      ykeys: ['deposit', 'billpayment'],
      labels: ['Deposit', 'Bill Payment'],
      pointSize: 0,
      fillOpacity: 0,
      pointStrokeColors: ['#20aee3', '#24d2b5'],
      behaveLikeLine: true,
      gridLineColor: '#e0e0e0',
      lineWidth: 3,
      hideHover: 'auto',
      lineColors: ['#20aee3', '#24d2b5'],
      resize: true,
      xLabelFormat: function (x: any) { // <--- x.getMonth() returns valid index
        var month = months[x.getMonth()];
        return month;
      },
      dateFormat: function (x: any) {
          var month = months[new Date(x).getMonth()];
          return month;
      }
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  checkCIMAcceptorStatus(value: string, terminal: Terminal | undefined) {
    return terminal?.cimStatus.some((x) => x.cashAcceptorStatus.toLowerCase().includes(value))
  }

  checkCashUnitStatus(value: string, terminal: Terminal | undefined) {
    return terminal?.cashUnitInfoes.some((x) => x.status.toLowerCase().includes(value))
  }

  getCIMStatus(terminal: Terminal): string {
    if(terminal?.cimStatus.length == 0) {
      return "Not Present"
    }

    if(this.checkCIMAcceptorStatus('online', terminal)) {
      return "Online";
    } 
    else if(this.checkCIMAcceptorStatus('offline', terminal)) {
      return 'Offline';
    }
    else if(this.checkCIMAcceptorStatus('power', terminal)) {
      return 'Power Off';
    }
    else if(this.checkCIMAcceptorStatus('present', terminal)) {
      return 'No Device Present';
    }
    else if(this.checkCIMAcceptorStatus('inope', terminal)) {
      return 'Inoperative';
    }
    else if(this.checkCIMAcceptorStatus('busy', terminal)) {
      return 'Busy';
    }
    else if(this.checkCIMAcceptorStatus('user', terminal)) {
      return 'User Interference';
    } else {
      return "Not Present"
    }

  }

  getCashUnitInfoStatus(terminal: Terminal) {

    if(terminal?.cashUnitInfoes.length == 0) {
      return "Not Applicable"
    }

    if(this.checkCashUnitStatus('statcunearfull', terminal)) {
      return "Near Full";
    } 
    else if(this.checkCashUnitStatus('statcufull', terminal)) {
      return 'Full';
    }
    else if(this.checkCashUnitStatus('ok', terminal)) {
      return 'OK';
    }
    else if(this.checkCashUnitStatus('statcuempty', terminal)) {
      return 'Empty';
    }
    else {
      return "Not Applicable"
    }
  }
}
 