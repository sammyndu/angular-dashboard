import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../shared/models/dashboard.model';
import { DashboardService } from '../shared/services/dashboard.service';
declare const c3: any;
declare const Morris: any;
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  dashboardModel: Dashboard = new Dashboard;
  onlineTerminalPercentage: number = 0;
  offlineTerminalPercentage: number = 0;
  //activeTerminalPercentage: number = 0;

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    $('#myTable').DataTable();
    this.getEmptyTerminals();
    this.getDashboardData();
  }

  getDashboardData() {
    this.dashboardService.getDashboardData().subscribe((dashboard) => {
      this.dashboardModel = dashboard;
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

  getCIMStatus(terminalId: number) {
    const terminal = this.dashboardModel.terminals.find((terminal) => {
      return terminal.id == terminalId;
    });

    // if (terminal.Ccim != null)
    //                 {
    //                     if (cim.CashAcceptorStatus.ToLower().Contains("online"))
    //                     {
    //                         <td class="bg-green">  Online</td>
    //                     }
    //                     else if (cim.CashAcceptorStatus.ToLower().Contains("offline"))
    //                     {
    //                         <td class="bg-blue"> Offline</td>
    //                     }
    //                     else if (cim.CashAcceptorStatus.ToLower().Contains("power"))
    //                     {
    //                         <td class="bg-red">Power Off</td>
    //                     }
    //                     else if (cim.CashAcceptorStatus.ToLower().Contains("present"))
    //                     {
    //                         <td class="bg-red"> No Device Present</td>
    //                     }
    //                     else if (cim.CashAcceptorStatus.ToLower().Contains("inope"))
    //                     {
    //                         <td class="bg-warning"> Inoperative </td>
    //                     }
    //                     else if (cim.CashAcceptorStatus.ToLower().Contains("busy"))
    //                     {
    //                         <td class="bg-light-blue-active"> Busy </td>
    //                     }
    //                     else if (cim.CashAcceptorStatus.ToLower().Contains("user"))
    //                     {
    //                         <td class="bg-warning"> User Interferance </td>
    //                     }

    //                 }
    //                 else
    //                 {
    //                     <td class="bg-black"> Not Present </td>
    //                 }

  }
}
 