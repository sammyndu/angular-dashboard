import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {

  audits: any[] = [];

  //datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAudits();
  }

  getAudits() {
    this.adminService.getAudits().subscribe(result => {
      console.log(result);
      this.audits = result;
      this.dtTrigger.next();
    })
  }

}
