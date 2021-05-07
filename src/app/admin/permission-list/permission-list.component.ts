import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PermisssionService } from 'src/app/shared/services/admin/permisssion.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {

  permissions: any[] = []

  //datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private permissionService: PermisssionService, private toaster: ToastService) { }

  ngOnInit(): void {
    this.getPermissions();
  }

  getPermissions() {
    this.permissionService.getPermissions().subscribe(result => {
      console.log(result);
      this.permissions = result;
      this.dtTrigger.next();
    })
  }

  importPermissions() {
    this.permissionService.importPermissions().subscribe(result => {

      console.log(result);
      if (result.message.toLowerCase().includes("no")) {
        this.toaster.showInfo(result.message, "Permissions")
        return;
      }
      this.toaster.showSuccess(result.message, "Permissions")

    })
  }

}
