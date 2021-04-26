import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RoleService } from 'src/app/shared/services/admin/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: any[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private roleService: RoleService ) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoles().subscribe(result => {
      console.log(result);
      this.roles = result.data;
    })
  }

}
