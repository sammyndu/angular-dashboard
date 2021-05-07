import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcquirerRoutingModule } from './acquirer-routing.model';
import { AcquirerListComponent } from './acquirer-list/acquirer-list.component';
import { DataTablesModule } from 'angular-datatables';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AcquirerViewComponent } from './acquirer-view/acquirer-view.component';
import { SharedModule } from '../shared/shared.module';
import { AcquirerViewItemComponent } from './acquirer-view/acquirer-view-item/acquirer-view-item.component';
import { AcquirerCreateEditComponent } from './acquirer-create-edit/acquirer-create-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AcquirerListComponent, AcquirerViewComponent, AcquirerViewItemComponent, AcquirerCreateEditComponent],
  imports: [
    CommonModule,
    AcquirerRoutingModule,
    DataTablesModule,
    SharedModule,
    FormsModule,
    TooltipModule.forRoot()
  ]
})
export class AcquirerModule { }
